import { useRef, useState } from "react"
import { GoogleGenAI, Modality } from "@google/genai"
import MicrophoneStream from "microphone-stream"

function downsampleBuffer(buffer: Float32Array, inputRate: number, targetRate: number) {
  if (targetRate === inputRate) return buffer
  const sampleRateRatio = inputRate / targetRate
  const newLength = Math.round(buffer.length / sampleRateRatio)
  const result = new Float32Array(newLength)
  let offsetResult = 0
  let offsetBuffer = 0
  while (offsetResult < result.length) {
    const nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio)
    let accum = 0
    let count = 0
    for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
      accum += buffer[i]
      count++
    }
    result[offsetResult] = accum / count
    offsetResult++
    offsetBuffer = nextOffsetBuffer
  }
  return result
}

function floatTo16BitPCM(input: Float32Array) {
  const output = new Int16Array(input.length)
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]))
    output[i] = s < 0 ? s * 0x8000 : s * 0x7fff
  }
  return output
}

function bufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ""
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

export function useGeminiLive() {
  const [isStreaming, setIsStreaming] = useState(false)
  const [transcript, setTranscript] = useState("")
  const sessionRef = useRef<any>()
  const micRef = useRef<MicrophoneStream>()
  const formatRef = useRef<{ sampleRate: number }>()

  const start = async () => {
    if (isStreaming) return
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
    if (!apiKey) {
      console.error("Missing Gemini API key")
      return
    }
    const ai = new GoogleGenAI({ apiKey })
    const session = await ai.live.connect({
      model: "gemini-2.0-flash-live-001",
      config: { responseModalities: [Modality.TEXT], inputAudioTranscription: {} },
      callbacks: {
        onopen: () => console.debug("Opened"),
        onmessage: (msg) => {
          if (msg.text) {
            setTranscript((t) => t + msg.text)
          }
        },
        onerror: (e) => console.error(e),
        onclose: () => console.debug("Closed"),
      },
    })
    sessionRef.current = session

    const userStream = await navigator.mediaDevices.getUserMedia({ audio: true })
    const micStream = new MicrophoneStream()
    micStream.setStream(userStream)
    micStream.on("format", (f: any) => {
      formatRef.current = f
    })
    micStream.on("data", (chunk: any) => {
      const raw = MicrophoneStream.toRaw(chunk) as Float32Array | null
      if (!raw || !formatRef.current) return
      const down = downsampleBuffer(raw, formatRef.current.sampleRate, 16000)
      const pcm = floatTo16BitPCM(down)
      const base64 = bufferToBase64(pcm.buffer)
      session.sendRealtimeInput({
        audio: { data: base64, mimeType: "audio/pcm;rate=16000" },
      })
    })
    micRef.current = micStream
    setTranscript("")
    setIsStreaming(true)
  }

  const stop = () => {
    micRef.current?.stop()
    sessionRef.current?.close()
    setIsStreaming(false)
  }

  return { start, stop, isStreaming, transcript }
}

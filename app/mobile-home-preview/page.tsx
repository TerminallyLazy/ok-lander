import MobileHomePreview from "@/components/mobile-home-preview"

export default function MobileHomePreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">iOS Mobile Layout Preview</h1>
        <p className="text-center text-gray-600 mb-8">Home page with carousel as it appears on iPhone</p>
        <MobileHomePreview />
      </div>
    </div>
  )
}

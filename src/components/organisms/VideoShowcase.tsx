export default function VideoShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-neutral-600 mb-8">
          Reglazing Process
        </h2>

        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black">
          <video
            controls
            className="w-full aspect-video object-contain"
          >
            <source src="/videos/video6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

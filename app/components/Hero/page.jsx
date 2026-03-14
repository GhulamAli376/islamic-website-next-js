export default function HeroVideo() {
  return (
    <section className="relative h-[90vh]
    flex items-center justify-center text-white text-center">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/heronew.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl px-6">

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ
        </h2>

        <p className="mb-6 text-lg">
          He Raised the Sky and Set Up the Balance
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded">
          Read More
        </button>

      </div>

    </section>
  )
}
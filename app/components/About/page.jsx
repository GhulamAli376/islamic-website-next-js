
export default function AboutCenter() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        {/* IMAGE SIDE */}
        <div className="relative w-fit">

          {/* YELLOW FRAME */}
          <div className="absolute -top-6 -left-6 w-full h-full border-[10px] border-yellow-500 rounded-lg"></div>

          {/* IMAGE */}
          <img
            src="/Masjid-e-Nabwi.webp"
            className="relative rounded-lg shadow-lg"
          />

        </div>

        {/* TEXT SIDE */}
        <div>

          <p className="text-orange-500 font-semibold mb-3">
            ABOUT OUR CENTER
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Welcome to Islamic Center
          </h2>

          <p className="text-gray-600 mb-6">
            Our Islamic center is dedicated to spreading the knowledge
            of Islam, helping the community, and guiding people
            through Quran and Sunnah teachings.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded">
            Learn More
          </button>

        </div>

      </div>

    </section>
  )
}
import Link from "next/link"

export default function IslamicResources() {

  const resources = [
    {
      title: "Holy Quran",
      desc: "Read the Holy Quran with translation and understanding.",
      img: "/quranimg.jpg",
      link: "/quran"
    },
    {
      title: "Hadith",
      desc: "Explore authentic sayings of Prophet Muhammad ﷺ.",
      img: "/hadith.jpg",
      link: "/hadith"
    },
    {
      title: "Important Duas",
      desc: "Daily supplications every Muslim should know.",
      img: "/dua.jpg",
      link: "/dailydua"
    },
    {
      title: "99 Names of Allah",
      desc: "Learn the beautiful names and attributes of Allah.",
      img: "/allahnames.jpg",
      link: "/Allahname"
    }
  ]

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold tracking-widest">
            ISLAMIC KNOWLEDGE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Explore Islamic Resources
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Discover authentic Islamic teachings including Quran, Hadith,
            daily duas, and the beautiful names of Allah.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {resources.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >

              {/* Image */}
              <div className="h-48 overflow-hidden">

                <img
                  src={item.img}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                <Link
                  href={item.link}
                  className="text-orange-500 font-semibold hover:underline"
                >
                  Explore →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
import Link from "next/link"

export default function IslamicLearning() {

  const sections = [
    {
      title: "Basic Knowledge of Islam",
      desc: "Learn the fundamentals of Islam including beliefs, practices, and Islamic teachings.",
      img: "/basicknowledge.jpg",
      link: "/islamicresource"
    },
    {
      title: "Islamic Quiz & Test",
      desc: "Test your Islamic knowledge with quizzes and interactive learning questions.",
      img: "/quiz.jfif",
      link: "/quiz"
    }
  ]

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">

          <p className="text-orange-500 font-semibold tracking-widest">
            LEARN ISLAM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-black">
            Islamic Learning
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Expand your Islamic knowledge and test your understanding through learning and quizzes.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {sections.map((item, index) => (

            <div
              key={index}
              className="relative rounded-xl 
              overflow-hidden shadow-lg group"
            >

              {/* Image */}
              <img
                src={item.img}
                className="w-full h-72 
                object-cover group-hover:scale-110 transition 
                duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center p-6">

                <h3 className="text-3xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 mb-5 max-w-md">
                  {item.desc}
                </p>

                <Link
                  href={item.link}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md"
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
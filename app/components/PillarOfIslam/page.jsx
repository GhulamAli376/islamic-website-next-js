import Image from "next/image";

export default function PillarsOfIslam() {
  const pillars = [
    {
      title: "Shahada",
      text: "Faith in the oneness of Allah and Prophet Muhammad ﷺ as His messenger.",
      icon:"/shahada.jpg"
    },
    {
      title: "Salah",
      text: "Performing the five daily prayers to maintain connection with Allah.",
      icon:"/namaz.png"
    },
    {
      title: "Zakat",
      text: "Giving charity to help those in need and purify wealth.",
      icon:"/zakat.jpg"
    },
    {
      title: "Sawm",
      text: "Fasting during the month of Ramadan for spiritual discipline.",
      icon:"/roza.jpg"
    },
    {
      title: "Hajj",
      text: "Pilgrimage to Makkah once in a lifetime if able.",
      icon:"/hajj.jpg"
    },
  ];

  return (
    <section className="relative h-[80vh] mb-5 py-18 mx-15  overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/masjid-e-quba.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BLACK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        {/* Title */}
        <p className="text-orange-400 font-semibold tracking-widest">
          ISLAMIC PRINCIPLES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-16">
          Pillars of Islam
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-5 gap-8">

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white/90 text-black p-6 rounded-lg shadow hover:shadow-xl transition"
            >

 <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full">
  <Image
    src={pillar.icon}
    width={120}
    height={120}
    alt={pillar.title}
    className="object-contain"
  />
</div>

              <h3 className="text-xl font-semibold mb-2">
                {pillar.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {pillar.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
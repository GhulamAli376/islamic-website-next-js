"use client"

export default function PrayerTimes({ times }) {

  if (!times) return null

  const icons = { Fajr: "🌙", Dhuhr: "☀️", Asr: "🌤", Maghrib: "🌇", Isha: "🌌" }
  const prayers = ["Fajr","Dhuhr","Asr","Maghrib","Isha"]

  return(
    <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg border border-green-500 rounded-2xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-400 mb-6">
        Today's Prayer Times
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {prayers.map((name)=>(
          <div
            key={name}
            className="bg-gradient-to-br from-green-700 to-emerald-900 text-white rounded-xl p-4 md:p-6 text-center shadow-lg hover:scale-105 transition"
          >
            <div className="text-2xl md:text-3xl mb-2">{icons[name]}</div>
            <p className="font-semibold text-base md:text-lg">{name}</p>
            <p className="text-lg md:text-xl font-bold mt-1 md:mt-2">{times[name]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
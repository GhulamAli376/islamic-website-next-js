import Link from "next/link";

async function getSurahs() {

const res = await fetch("http://localhost:3000/api/quran/surah")

const data = await res.json()

return data

}

export default async function QuranPage() {

const surahs = await getSurahs()

return(

<div className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-green-800 p-10">

<h1 className="text-center text-5xl font-bold text-yellow-400 mb-14">
📖 Holy Quran
</h1>

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

{surahs.map((surah)=>(
  
<Link key={surah.number} href={`/quran/${surah.number}`}>

<div className="relative bg-white/90 backdrop-blur rounded-2xl p-6 text-center shadow-lg hover:scale-105 hover:shadow-2xl transition cursor-pointer">

{/* Surah Number Diamond */}

<div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-45 w-10 h-10 bg-green-700 flex items-center justify-center text-white font-bold">

<span className="-rotate-45">
{surah.number}
</span>

</div>

{/* Arabic */}

<p className="text-3xl text-green-800 mt-6 font-semibold">
{surah.name}
</p>

{/* English */}

<h2 className="text-lg font-semibold mt-2">
{surah.englishName}
</h2>

{/* Info */}

<p className="text-gray-500 text-sm mt-2">
{surah.revelationType} • {surah.numberOfAyahs} Ayahs
</p>

</div>

</Link>

))}

</div>

</div>

)

}
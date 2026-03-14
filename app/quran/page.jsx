import Link from "next/link";

async function getSurahs() {

const res = await fetch("http://localhost:3000/api/quran/surah",{
cache:"no-store"
})

const data = await res.json()

return data

}

export default async function QuranPage() {

const surahs = await getSurahs()

return(

<div className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

{/* HEADER */}

<div className="max-w-6xl mx-auto text-center mb-16">

<h1 className="text-5xl font-bold text-yellow-400 mb-4">
📖 Holy Quran
</h1>

<p className="text-gray-300 text-lg">
Read and explore the chapters of the Holy Quran
</p>

</div>

{/* SURAH GRID */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

{surahs.map((surah)=>(

<Link key={surah.number} href={`/quran/${surah.number}`}>

<div className="relative bg-white/10 backdrop-blur-lg border border-green-600 rounded-2xl p-6 text-center shadow-xl hover:scale-105 hover:border-yellow-400 transition duration-300 cursor-pointer">

{/* SURAH NUMBER */}

<div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-45 w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-bold shadow-lg">

<span className="-rotate-45">
{surah.number}
</span>

</div>

{/* ARABIC NAME */}

<p className="text-3xl text-green-400 mt-8 font-semibold">
{surah.name}
</p>

{/* ENGLISH NAME */}

<h2 className="text-lg font-semibold mt-2 text-yellow-300">
{surah.englishName}
</h2>

{/* INFO */}

<p className="text-gray-400 text-sm mt-2">
{surah.revelationType} • {surah.numberOfAyahs} Ayahs
</p>

</div>

</Link>

))}

</div>

</div>

)

}
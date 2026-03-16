"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuranSearch({ surahs }) {

const [search,setSearch] = useState("")

const filteredSurahs = surahs.filter((surah)=>
surah.englishName.toLowerCase().includes(search.toLowerCase()) ||
surah.name.toLowerCase().includes(search.toLowerCase()) ||
surah.number.toString().includes(search)
)

return(

<div className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

{/* HEADER */}

<div className="max-w-6xl mx-auto text-center mb-16 ">

<h1 className="text-5xl font-bold text-yellow-400 mb-4 pt-15">
📖 Holy Quran
</h1>

<p className="text-gray-300 text-lg mb-6">
Read and explore the chapters of the Holy Quran
</p>

{/* SEARCH BAR */}

<input
type="text"
placeholder="Search Surah..."
className="w-full md:w-1/2 p-3 rounded-lg bg-white/10 border border-green-600 focus:outline-none focus:border-yellow-400"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

{/* SURAH GRID */}

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

{filteredSurahs.map((surah)=>(

<Link key={surah.number} href={`/quran/${surah.number}`}>

<div className="relative bg-white/10 backdrop-blur-lg border border-green-600 rounded-2xl p-6 text-center shadow-xl hover:scale-105 hover:border-yellow-400 transition duration-300 cursor-pointer">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-45 w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-bold shadow-lg">

<span className="-rotate-45">
{surah.number}
</span>

</div>

<p className="text-3xl text-green-400 mt-8 font-semibold">
{surah.name}
</p>

<h2 className="text-lg font-semibold mt-2 text-yellow-300">
{surah.englishName}
</h2>

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
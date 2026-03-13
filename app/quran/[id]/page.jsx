"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function SurahDetail(){

const { id } = useParams()

const [arabic,setArabic] = useState("")
const [translation,setTranslation] = useState("")
const [name,setName] = useState("")

const surahNumber = String(id).padStart(3,"0")

useEffect(()=>{

async function fetchSurah(){

const res = await fetch(`/api/quran/${id}`)
const data = await res.json()

console.log("SURAH DATA:",data)

// safety check
if(!data || data.length < 2) return

setName(data[0]?.englishName || "")

const arabicAyahs = data[0]?.ayahs || []
const urduAyahs = data[1]?.ayahs || []

const arabicText = arabicAyahs.map(a => a.text).join(" ۝ ")
const urduText = urduAyahs.map(a => a.text).join(" ")

setArabic(arabicText)
setTranslation(urduText)

}

fetchSurah()

},[id])

return(

<div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 p-6">

<h1 className="text-center text-4xl font-bold text-yellow-300 mb-8">
Surah {name}
</h1>

<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

{/* AUDIO */}

<div className="mb-8 text-center">

<p className="text-lg font-semibold text-green-700 mb-3">
🎧 Listen to Recitation
</p>

<audio
controls
className="w-full"
src={`https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${surahNumber}.mp3`}
>
</audio>

</div>

{/* Arabic */}

<div className="mb-10">

<h2 className="text-center text-2xl font-bold text-green-700 mb-6">
Arabic
</h2>

<p className="text-right text-3xl leading-loose text-gray-800 font-serif">
{arabic || "Loading Arabic..."}
</p>

</div>

{/* Translation */}

<div>

<h2 className="text-center text-2xl font-bold text-green-700 mb-6">
Urdu Translation
</h2>

<p className="text-lg leading-loose text-gray-700">
{translation || "Loading Translation..."}
</p>

</div>

</div>

</div>

)

}
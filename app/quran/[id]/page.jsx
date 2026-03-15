"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function SurahDetail(){

const { id } = useParams()

const [ayahs,setAyahs] = useState([])
const [name,setName] = useState("")

const surahNumber = String(id).padStart(3,"0")

useEffect(()=>{

document.title = "Surah Detail | Read & Learn Islamic Knowledge"
async function fetchSurah(){

try{

const res = await fetch(`/api/quran/${id}`)
const data = await res.json()

if(!data || data.length < 2) return

setName(data[0]?.englishName || "")

const arabicAyahs = data[0]?.ayahs || []
const urduAyahs = data[1]?.ayahs || []

const combined = arabicAyahs.map((a,i)=>({
number:a.numberInSurah,
arabic:a.text,
urdu:urduAyahs[i]?.text || ""
}))

setAyahs(combined)

}catch(err){
console.log(err)
}

}

fetchSurah()

},[id])

return(

<div className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

{/* HEADER */}

<div className="text-center mb-12">

<h1 className="text-5xl font-bold text-yellow-400 mb-3">
📖 Surah {name}
</h1>

<p className="text-gray-300">
Read and listen to the recitation
</p>

</div>


{/* AUDIO */}

<div className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-lg border border-green-600 rounded-xl p-6 text-center">

<p className="text-lg font-semibold text-green-400 mb-4">
🎧 Listen to Recitation
</p>

<audio
controls
className="w-full"
src={`https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${surahNumber}.mp3`}
></audio>

</div>


{/* AYAH LIST */}

<div className="max-w-4xl mx-auto space-y-10">

{ayahs.map((a)=>(
  
<div key={a.number} className="bg-white/10 backdrop-blur-lg border border-green-700 rounded-xl p-6 shadow-lg">

{/* AYAH NUMBER */}

<div className="text-sm text-green-400 mb-3">
Ayah {a.number}
</div>

{/* ARABIC */}

<p className="text-right text-3xl leading-loose font-serif text-gray-100 mb-6">
{a.arabic}
</p>

{/* URDU */}

<p className="text-lg leading-relaxed text-gray-300 border-l-4 border-green-500 pl-4">
{a.urdu}
</p>

</div>

))}

</div>

</div>

)

}
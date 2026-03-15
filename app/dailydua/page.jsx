"use client"

import { useEffect, useState } from "react"

export default function DailyDua(){

const [duas,setDuas] = useState([])
const [index,setIndex] = useState(0)

useEffect(()=>{

document.title = "Daily Dua | Read & Learn Islamic Knowledge"
async function getData(){

const res = await fetch("/api/dua")
const data = await res.json()

setDuas(data)

}

getData()

},[])

if(duas.length === 0){
return <p className="text-center mt-20 text-xl">Loading...</p>
}

const dua = duas[index]

return(

<div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center p-8">

<div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">

{/* Image */}

<div className="h-60 md:h-auto">
<img
src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f"
className="w-full h-full object-cover"
/>
</div>

{/* Dua Content */}

<div className="p-8 flex flex-col justify-center">

<h2 className="text-2xl font-bold text-green-800 mb-2">
{dua.title}
</h2>

<span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full w-fit mb-4">
{dua.category}
</span>

<p className="text-3xl text-right leading-loose font-semibold text-gray-800">
{dua.dua}
</p>

<p className="italic text-gray-600 mt-4">
{dua.transliteration}
</p>

<p className="text-gray-500 mt-4">
{dua.description}
</p>

<button
onClick={()=>setIndex((index+1) % duas.length)}
className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
>
Next Dua
</button>

</div>

</div>

</div>

)
}
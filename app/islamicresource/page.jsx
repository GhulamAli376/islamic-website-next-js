"use client"

import { useEffect,useState } from "react"

export default function BasicKnowledge(){

const [data,setData] = useState([])
const [open,setOpen] = useState(null)

useEffect(()=>{

async function getData(){

const res = await fetch("/data/basicknowledge.json")
const data = await res.json()

setData(data)

}

getData()

},[])

return(

<div className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

{/* HEADER */}

<div className="text-center mb-16">

<h1 className="text-5xl font-bold text-yellow-400 mb-4">
🕌 Islamic Basic Knowledge
</h1>

<p className="text-gray-300">
Learn important Islamic knowledge step by step
</p>

</div>


{/* TIMELINE */}

<div className="max-w-3xl mx-auto border-l border-green-700">

{data.slice(0,50).map((item,index)=>{

const isOpen = open === index

return(

<div key={index} className="relative mb-10 ml-6">

{/* DOT */}

<span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-700 rounded-full"></span>

{/* QUESTION */}

<div
onClick={()=>setOpen(isOpen ? null : index)}
className="bg-white/10 backdrop-blur-lg border border-green-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400 transition"
>

<h2 className="text-lg font-semibold text-yellow-300">
❓ {item.question}
</h2>

{isOpen && (

<div className="mt-4 border-t border-green-700 pt-4">

<p className="text-gray-300">
✅ Correct Answer: {item.correct_answer}
</p>

<p className="text-gray-400 mt-2">
Options: {item.options.join(", ")}
</p>

</div>

)}

</div>

</div>

)

})}

</div>

</div>

)

}
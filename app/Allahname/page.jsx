"use client"
import { useEffect, useState } from "react"

export default function AllahName(){

const [name,setName] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{
document.title = "Allah Names | Read & Learn Islamic Knowledge"
async function getData(){

try{

const res = await fetch(`/api/allahname`)
const data = await res.json()
const sort = data.sort((a,b)=>a.number - b.number)
console.log(sort)
setName(sort)

}catch(err){
console.log(err)
}

setLoading(false)

}

getData()

},[])

if(loading){

return(

<div className="flex items-center justify-center min-h-screen bg-black text-white">

<div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>

</div>

)

}

return(

<div className="min-h-screen pt-36 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">

{/* HEADER */}

<div className="max-w-6xl mx-auto text-center mb-14 px-6">

<h1 className="text-5xl font-bold text-yellow-400 mb-4">
99 Names of Allah
</h1>

<p className="text-gray-300 text-lg">
Learn and reflect upon the beautiful names of Allah (Asma ul Husna)
</p>

</div>

{/* GRID */}

<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

{name.map((item,index)=>(

<div
key={index}
className="bg-white/10 backdrop-blur-lg border border-green-600 rounded-2xl p-6 text-center shadow-xl hover:scale-105 hover:border-yellow-400 transition duration-300"
>

{/* NUMBER */}

<p className="text-sm text-gray-300 mb-2">
{item.number}
</p>

{/* ARABIC NAME */}

<h2 className="text-3xl font-bold text-green-400 mb-2">
{item.name}
</h2>

{/* TRANSLITERATION */}

<p className="text-lg font-semibold text-yellow-300">
{item.transliteration}
</p>

{/* MEANING */}

<p className="text-sm text-gray-300 mt-2">
{item.en.meaning}
</p>

</div>

))}

</div>

</div>

)

}
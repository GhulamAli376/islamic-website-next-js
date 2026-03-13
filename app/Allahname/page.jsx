"use client"
import { useEffect, useState } from "react"

export default function AllahName(){

const [name,setName] = useState([])

useEffect(()=>{

async function getData(){

const res = await fetch(`/api/allahname`)
const data = await res.json()

setName(data)

}

getData()

},[])

return(

<div className="p-8 max-w-7xl mx-auto">

<h1 className="text-4xl font-bold text-center mb-10 text-green-700">
99 Names of Allah
</h1>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
{name.map((item,index)=>(

<div
key={index}
className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-xl transition border"
>

<h2 className="text-sm text-gray-500 mb-2">
{item.number}
</h2>

<h1 className="text-2xl font-bold text-green-700">
{item.name}
</h1>

<p className="text-lg font-semibold text-gray-700">
{item.transliteration}
</p>

<p className="text-sm text-gray-500 mt-2">
{item.en.meaning}
</p>

</div>

))}

</div>

</div>

)

}
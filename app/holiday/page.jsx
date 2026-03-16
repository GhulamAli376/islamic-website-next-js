"use client"
import { useState,useEffect } from "react"

export default function Holidays(){

const [holidays,setHolidays] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

async function getData(){

try{

let allEvents = []

for(let month=1; month<=12; month++){

const res = await fetch(`/api/hijri`)
const data = await res.json()

if(Array.isArray(data.data)){

const events = data.data
.filter(item => item.date.hijri.holidays.length > 0)
.map(item => ({
gregorian: item.date.gregorian.date,
hijri: item.date.hijri.date,
event: item.date.hijri.holidays[0]
}))

allEvents.push(...events)

}

}

setHolidays(allEvents)

}catch(err){
console.error("Holiday fetch error:",err)
}

setLoading(false)

}

getData()

},[])

if(loading){
return(
<p className="text-center text-gray-300 mt-10">
Loading Holidays...
</p>
)
}

return(

<div className="bg-white/5 backdrop-blur-lg border border-yellow-500 rounded-2xl p-4 md:p-6 shadow-xl">

<h2 className="text-2xl md:text-3xl font-bold text-center text-yellow-400 mb-6 md:mb-8">
🕌 Islamic Holidays
</h2>

{/* MOBILE VIEW */}

<div className="grid gap-4 md:hidden">

{holidays.map((item,index)=>(

<div
key={index}
className="bg-green-900/40 border border-green-700 rounded-xl p-4"
>

<p className="text-sm text-gray-300">
Gregorian
</p>
<p className="font-semibold">
{item.gregorian}
</p>

<p className="text-sm text-gray-300 mt-2">
Hijri
</p>
<p className="text-yellow-300 font-semibold">
{item.hijri}
</p>

<p className="text-sm text-gray-300 mt-2">
Event
</p>
<p className="text-green-400 font-bold">
{item.event}
</p>

</div>

))}

</div>

{/* DESKTOP TABLE */}

<div className="overflow-x-auto hidden md:block">

<table className="w-full text-left text-gray-200">

<thead className="bg-gradient-to-r from-green-700 to-emerald-800 text-white">

<tr>
<th className="p-4">Gregorian</th>
<th className="p-4">Hijri</th>
<th className="p-4">Event</th>
</tr>

</thead>

<tbody>

{holidays.map((item,index)=>(

<tr
key={index}
className="border-b border-gray-700 hover:bg-green-900/40 transition"
>

<td className="p-4">{item.gregorian}</td>

<td className="p-4 text-yellow-300 font-medium">
{item.hijri}
</td>

<td className="p-4 font-semibold text-green-400">
{item.event}
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}
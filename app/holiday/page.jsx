"use client"
import { useEffect, useState } from "react"

export default function Holidays(){

const [holidays,setHolidays] = useState([])

useEffect(()=>{

async function getData(){

let allEvents = []

for(let month=1; month<=12; month++){

const res = await fetch(
`https://api.aladhan.com/v1/hijriCalendarByCity?city=Karachi&country=Pakistan&method=1&month=${month}&year=1447`
)

const data = await res.json()

const events = data.data
.filter(item => item.date.hijri.holidays.length > 0)
.map(item => ({
gregorian: item.date.gregorian.date,
hijri: item.date.hijri.date,
event: item.date.hijri.holidays[0]
}))

allEvents.push(...events)

}

setHolidays(allEvents)

}

getData()

},[])

return(

<div className="p-10 min-h-screen">

<h1 className="text-4xl font-bold text-yellow-300 mb-8 text-center">
🕌 Islamic Holidays
</h1>

<div className="overflow-x-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl">

<table className="w-full border-collapse min-w-[600px]">

<thead className="bg-green-700 text-white">

<tr>
<th className="border p-3 text-left">Gregorian</th>
<th className="border p-3 text-left">Hijri</th>
<th className="border p-3 text-left">Event</th>
</tr>

</thead>

<tbody>

{holidays.map((item,index)=>(

<tr key={index} className={`text-gray-800 hover:bg-green-100 transition ${index % 2 === 0 ? "bg-green-50" : "bg-white"}`}>
<td className="border p-2">{item.gregorian}</td>
<td className="border p-2">{item.hijri}</td>
<td className="border p-2 font-semibold text-green-700">{item.event}</td>
</tr>

))}

</tbody>

</table>

</div>

</div>

)

}
"use client"

import { useState, useEffect } from "react"

export default function IslamicCalendar({ hijri }) {

const [month,setMonth] = useState(parseInt(hijri.month.number))
const [year,setYear] = useState(parseInt(hijri.year))
const [days,setDays] = useState([])

const monthNames = [
"Muharram","Safar","Rabi al-awwal","Rabi al-thani",
"Jumada al-awwal","Jumada al-thani","Rajab",
"Shaban","Ramadan","Shawwal","Dhu al-Qadah","Dhu al-Hijjah"
]
const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

useEffect(()=>{

const totalDays = hijri.month.days
const arr = []

for(let i=1;i<=totalDays;i++){
arr.push(i)
}

setDays(arr)

},[month])

const today = parseInt(hijri.day)

const next = ()=>{
if(month===12){
setMonth(1)
setYear(year+1)
} else{
setMonth(month+1)
}
}

const prev = ()=>{
if(month===1){
setMonth(12)
setYear(year-1)
} else{
setMonth(month-1)
}
}

return(

<div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6">

{/* Header */}

<div className="flex justify-between items-center mb-6">

<button
onClick={prev}
className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
>
Prev
</button>

<h2 className="text-2xl font-bold text-yellow-300">
{monthNames[month-1]} {year} AH
</h2>

<button
onClick={next}
className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
>
Next
</button>

</div>

{/* Weekdays */}

<div className="grid grid-cols-7 gap-2 text-center mb-2 font-semibold text-gray-700">
{weekDays.map(day=>(
<div key={day} className="text-green-800">
{day}
</div>
))}
</div>

{/* Days */}

<div className="grid grid-cols-7 gap-2 text-center">

{days.map(day=>{

const isToday =
day === today &&
month === parseInt(hijri.month.number) &&
year === parseInt(hijri.year)

return(

<div
key={day}
className={`p-3 rounded border flex items-center justify-center font-semibold transition
${isToday
? "bg-green-600 text-yellow-300 shadow-lg scale-105"
: "bg-green-100 text-green-900 hover:bg-green-200"
}`}
>
{day}
</div>

)

})}

</div>

</div>

)

}
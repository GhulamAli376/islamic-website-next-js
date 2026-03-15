"use client"

import { useEffect, useState } from "react"
import PrayerTimes from "../components/PrayerTime/page"
import IslamicCalendar from "../components/IslamicCalender/page"
import Holidays from "../holiday/page"

export default function PrayerTime(){

const [hijri,setHijri] = useState(null)
const [times,setTimes] = useState(null)

useEffect(()=>{

document.title = "Prayer Times | Read & Learn Islamic Knowledge"
const fetchData = async ()=>{

try{

const res = await fetch(`/api/prayertime`)
const data = await res.json()

if(data?.date?.hijri){
setHijri(data.date.hijri)
}

if(data?.timings){
setTimes(data.timings)
}

}catch(err){
console.error("Error fetching prayer time:",err)
}

}

fetchData()

},[])

if(!hijri || !times){

return(

<div className="flex items-center justify-center min-h-screen bg-black text-white">

<div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>

</div>

)

}

return(

<div className="min-h-screen pt-36 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">

{/* HERO */}

<div className="max-w-6xl mx-auto text-center mb-16 px-6">

<h1 className="text-5xl font-bold text-yellow-400 mb-4">
Prayer Times & Islamic Calendar
</h1>

<p className="text-gray-300 text-lg">
Stay connected with your daily prayers and Islamic dates
</p>

</div>

{/* HIJRI DATE */}

<div className="max-w-4xl mx-auto mb-16 px-6">

<div className="bg-white/10 backdrop-blur-lg border border-yellow-500 rounded-2xl p-8 text-center shadow-xl">

<h2 className="text-2xl font-semibold text-yellow-400 mb-3">
Today's Hijri Date
</h2>

<p className="text-3xl font-bold tracking-wide">
{hijri.day} {hijri.month.en} {hijri.year} AH
</p>

</div>

</div>

{/* PRAYER TIMES */}

<div className="max-w-6xl mx-auto px-6 mb-20">

<h2 className="text-3xl font-bold mb-8 text-center text-green-400">
Today's Prayer Times
</h2>

<div className="bg-white/10 backdrop-blur-lg border border-green-500 rounded-2xl p-8 shadow-xl">

<PrayerTimes times={times}/>

</div>

</div>

{/* ISLAMIC CALENDAR */}

<div className="max-w-6xl mx-auto px-6 mb-20">

<h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
Islamic Calendar
</h2>

<div className="bg-white/10 backdrop-blur-lg border border-purple-500 rounded-2xl p-8 shadow-xl">

<IslamicCalendar hijri={hijri}/>

</div>

</div>

{/* HOLIDAYS */}

<div className="max-w-6xl mx-auto px-6 mb-20">

<h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
Islamic Holidays
</h2>

<div className="bg-white/10 backdrop-blur-lg border border-orange-500 rounded-2xl p-8 shadow-xl">

<Holidays/>

</div>

</div>

{/* QURAN QUOTE */}

<div className="max-w-4xl mx-auto px-6">

<div className="bg-gradient-to-r from-green-900 to-emerald-700 rounded-2xl p-10 text-center shadow-2xl border border-green-500">

<p className="text-3xl font-semibold italic leading-relaxed">
"Indeed, prayer prohibits immorality and wrongdoing"
</p>

<p className="mt-4 text-gray-200 text-lg">
— Quran 29:45
</p>

</div>

</div>

</div>

)

}
"use client";

import { useEffect, useState } from "react";
import PrayerTimes from "../components/PrayerTime/page";
import IslamicCalendar from "../components/IslamicCalender/page";
import Holidays from "../holiday/page";


export default function PrayerTime() {

const [hijri,setHijri] = useState(null)
const [times,setTimes] = useState(null)

useEffect(()=>{

const fetchData = async ()=>{

try{

const res = await fetch(`/api/prayertime`)
const data = await res.json()

console.log("API DATA:", data)

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

if(!hijri || !times)
return <p className="text-center mt-10 text-xl">Loading Islamic Data...</p>
return(

<div className="min-h-screen bg-green-50 p-6">

<h1 className="text-3xl font-bold text-center mb-6">
Islamic Calendar
</h1>

<PrayerTimes times={times}/>
<IslamicCalendar hijri={hijri}/>
<Holidays/>

</div>

)

}
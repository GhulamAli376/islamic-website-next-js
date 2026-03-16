"use client"
import { useEffect, useState } from "react"
import PrayerTimes from "../components/PrayerTime/page"
import IslamicCalendar from "../components/IslamicCalender/page"
import Holidays from "../holiday/page"

export default function PrayerTime(){

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
    document.title = "Prayer Times | Read & Learn Islamic Knowledge"

    const fetchData = async ()=>{
      try{
        const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=Karachi&country=Pakistan&method=1`)
        const json = await res.json()
        if(json.code === 200){
          setData(json.data)
        } else {
          setError(true)
        }
      }catch(err){
        console.error("Error:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  },[])

  if(loading) return <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
  </div>

  if(error || !data) return <p className="text-center text-white mt-20">Unable to fetch data. Please try again later.</p>

  return(
    <div className="min-h-screen pt-36 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-16 px-6">
        <h1 className="text-5xl font-bold text-yellow-400 mb-4">Prayer Times & Islamic Calendar</h1>
        <p className="text-gray-300 text-lg">Stay connected with your daily prayers and Islamic dates</p>
      </div>

      {/* HIJRI DATE */}
      <div className="max-w-4xl mx-auto mb-16 px-6">
        <div className="bg-white/10 backdrop-blur-lg border border-yellow-500 rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Today's Hijri Date</h2>
          <p className="text-3xl font-bold tracking-wide">
            {data.date.hijri.day} {data.date.hijri.month.en} {data.date.hijri.year} AH
          </p>
        </div>
      </div>

      {/* PRAYER TIMES */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <PrayerTimes times={data.timings}/>
      </div>

      {/* ISLAMIC CALENDAR */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <IslamicCalendar hijri={data.date.hijri}/>
      </div>

      {/* HOLIDAYS */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <Holidays/>
      </div>

    </div>
  )
}
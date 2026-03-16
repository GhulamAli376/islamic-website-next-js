"use client"

import { useState, useEffect } from "react"

export default function IslamicCalendar({ hijri }) {

  // safe initialization
  const [month, setMonth] = useState(hijri?.month?.number ? parseInt(hijri.month.number) : 1)
  const [year, setYear] = useState(hijri?.year ? parseInt(hijri.year) : 1445)
  const [days, setDays] = useState([])

  const monthNames = [
    "Muharram","Safar","Rabi al-awwal","Rabi al-thani",
    "Jumada al-awwal","Jumada al-thani","Rajab",
    "Shaban","Ramadan","Shawwal","Dhu al-Qadah","Dhu al-Hijjah"
  ]

  const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  const weekdayMap = {
    "Al Ahad": 0,
    "Al Athnayn": 1,
    "Al Thalatha": 2,
    "Al Arba'a": 3,
    "Al Khamees": 4,
    "Al Jumu'a": 5,
    "Al Sabt": 6
  }

  useEffect(()=>{

    if(!month || !year) return

    async function fetchCalendar(){
      try{

        const res = await fetch(
          `https://api.aladhan.com/v1/hijriCalendar?year=${year}&month=${month}&latitude=24.8607&longitude=67.0011`
        )

        const data = await res.json()

        if(Array.isArray(data.data)){
          setDays(data.data)
        }

      }catch(err){
        console.error("Error fetching Hijri calendar:", err)
      }
    }

    fetchCalendar()

  }, [month, year])

  // prevent crash if hijri not loaded
  if(!hijri){
    return (
      <div className="text-center p-10 text-gray-600">
        Loading Calendar...
      </div>
    )
  }

  const today = parseInt(hijri.day)

  const next = ()=>{
    month===12 ? (setMonth(1), setYear(year+1)) : setMonth(month+1)
  }

  const prev = ()=>{
    month===1 ? (setMonth(12), setYear(year-1)) : setMonth(month-1)
  }

  let calendarCells = []

  if(days.length > 0){
    const firstDay = weekdayMap[days[0].date.hijri.weekday.en] || 0
    calendarCells = [...Array(firstDay).fill(null), ...days]
  }

  return(

    <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4 md:p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <button
        onClick={prev}
        className="bg-green-700 text-white px-3 md:px-4 py-2 rounded hover:bg-green-800 transition"
        >
        Prev
        </button>

        <h2 className="text-lg md:text-2xl font-bold text-green-900 text-center">
        {monthNames[month-1]} {year} AH
        </h2>

        <button
        onClick={next}
        className="bg-green-700 text-white px-3 md:px-4 py-2 rounded hover:bg-green-800 transition"
        >
        Next
        </button>

      </div>

      {/* Weekdays */}

      <div className="grid grid-cols-7 text-center mb-2 text-xs md:text-sm font-semibold text-gray-700">

        {weekDays.map(day=>(

          <div key={day}>{day}</div>

        ))}

      </div>

      {/* Days */}

      <div className="grid grid-cols-7 gap-1 md:gap-2 text-center">

        {calendarCells.map((item,index)=>{

          if(!item) return <div key={index}></div>

          const day = parseInt(item.date.hijri.day)

          const isToday =
          day === today &&
          month === parseInt(hijri.month.number) &&
          year === parseInt(hijri.year)

          const isHoliday = item.date.hijri.holidays?.length > 0

          return(

            <div
            key={index}
            className={`p-2 md:p-3 rounded text-sm md:text-base font-semibold
            ${
              isToday
              ? "bg-green-600 text-white shadow-lg scale-105"
              : isHoliday
              ? "bg-orange-400 text-white shadow"
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
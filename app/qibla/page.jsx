"use client"
import { useEffect, useState } from "react";

export default function IslamicCalendar() {

  const [calendar, setCalendar] = useState([]);

  useEffect(() => {

    const year = new Date().getFullYear();

    fetch(`https://api.aladhan.com/v1/hijriCalendar/${year}?adjustment=-1`)
      .then(res => res.json())
      .then(data => {
        setCalendar(data.data);
      });

  }, []);

  const months = {};

  calendar.forEach(day => {
    const month = day.hijri.month.en;
    if (!months[month]) months[month] = [];
    months[month].push(day);
  });

  return (
    <div className="min-h-screen bg-green-50 p-8">

      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Islamic Year Calendar
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {Object.keys(months).map(month => (

          <div key={month} className="bg-white rounded-xl shadow p-5">

            <h2 className="text-xl font-bold text-green-700 mb-4">
              {month}
            </h2>

            <div className="grid grid-cols-7 gap-2 text-center text-sm">

              {months[month].map((day, index) => (

                <div
                  key={index}
                  className="bg-green-50 rounded p-2 hover:bg-green-100"
                >
                  {day.hijri.day}
                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
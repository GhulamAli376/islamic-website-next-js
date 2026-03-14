export default function PrayerTimes({times}){

if(!times) return null

const icons={
Fajr:"🌙",
Dhuhr:"☀️",
Asr:"🌤",
Maghrib:"🌇",
Isha:"🌌"
}

return(

<div className="bg-white/10 backdrop-blur-lg border border-green-500 rounded-2xl p-8 shadow-xl">

<h2 className="text-3xl font-bold text-center text-green-400 mb-8">
Prayer Times
</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

{Object.entries(times).slice(0,5).map(([name,time])=>(

<div
key={name}
className="bg-gradient-to-br from-green-700 to-emerald-900 text-white rounded-xl p-6 text-center shadow-lg hover:scale-105 transition"
>

<div className="text-3xl mb-2">
{icons[name]}
</div>

<p className="font-semibold text-lg">
{name}
</p>

<p className="text-xl font-bold mt-2">
{time}
</p>

</div>

))}

</div>

</div>

)

}
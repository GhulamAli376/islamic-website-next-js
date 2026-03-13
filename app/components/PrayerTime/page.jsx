export default function PrayerTimes({ times }) {

if(!times) return null

return (

<div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 mb-8">

<h2 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
🕌 Prayer Times
</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

{Object.entries(times).slice(0,7).map(([name,time])=>(

<div
key={name}
className="flex flex-col items-center justify-center bg-green-100/80 border border-green-700 rounded-xl p-4 shadow-md hover:shadow-2xl transition"
>

<p className="font-semibold text-green-800 text-lg">{name}</p>
<p className="font-mono text-gray-800 mt-1">{time}</p>

</div>

))}

</div>

</div>

)
}
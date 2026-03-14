"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HadithList() {

const [hadiths, setHadiths] = useState([]);
const [loading,setLoading] = useState(true)

useEffect(() => {

async function getData() {

try{

const res = await fetch("/api/hadith");
const data = await res.json();

setHadiths(Array.isArray(data) ? data : []);

}catch(err){
console.log(err)
}

setLoading(false)

}

getData();

}, []);

if(loading){

return(

<div className="flex items-center justify-center min-h-screen bg-black text-white">

<div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>

</div>

)

}

return (

<div className="min-h-screen pt-36 pb-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">

{/* HEADER */}

<div className="max-w-6xl mx-auto text-center mb-12 px-6">

<h1 className="text-5xl font-bold text-yellow-400 mb-4">
📜 Hadith Collection
</h1>

<p className="text-gray-300 text-lg">
Explore authentic sayings of Prophet Muhammad ﷺ
</p>

</div>


{/* HADITH LIST */}

<div className="max-w-5xl mx-auto px-6 space-y-5 ">

{hadiths.map((h) => (

<Link key={`hadith-${h.id}`} href={`/hadith/${h.id}`}>

<div className="flex mb-5 items-center justify-between bg-white/10 backdrop-blur-lg border border-green-600 rounded-2xl shadow-xl hover:border-yellow-400 hover:scale-[1.02] transition p-6 cursor-pointer">

{/* LEFT */}

<div className="flex items-center gap-4">

<div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white font-bold rounded-full">
{h.id}
</div>

<div className="max-w-xl">

<h2 className="font-semibold text-lg text-yellow-300">
{h.headingEnglish || "No Heading"}
</h2>

<p className="text-gray-300 text-sm line-clamp-2 mt-1">
{h.hadithEnglish || "No English text"}
</p>

</div>

</div>

{/* RIGHT */}

<div className="text-green-400 font-semibold text-sm whitespace-nowrap">
{h.book?.bookName || h.bookSlug || "Unknown Book"}
</div>

</div>

</Link>

))}

</div>

</div>

);
}
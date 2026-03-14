"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function HadithDetail() {

const params = useParams();
const [hadith, setHadith] = useState(null);

useEffect(() => {

async function getData() {

try{

const res = await fetch("/api/hadith");
const data = await res.json();

const found = Array.isArray(data)
? data.find((h) => String(h.id) === String(params.id))
: null;

setHadith(found);

}catch(err){
console.log(err)
}

}

getData();

}, [params.id]);

if (!hadith) {
return (
<div className="flex items-center justify-center min-h-screen bg-black text-white">
<div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-500"></div>
</div>
);
}

return (

<div className="min-h-screen pt-36 pb-24 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

<div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-green-600 rounded-2xl shadow-2xl p-10">

{/* HEADING */}

<h1 className="text-3xl font-bold text-yellow-400 mb-3">
{hadith.headingEnglish || "No Heading"}
</h1>

{/* BOOK BADGE */}

<div className="mb-10 flex flex-wrap items-center gap-3">

<span className="bg-green-800 text-green-200 px-4 py-1 rounded-full text-sm border border-green-500">
📚 {hadith.book?.bookName || hadith.bookSlug || "Unknown Book"}
</span>

<span className="text-gray-400 text-sm">
Hadith #{hadith.id}
</span>

</div>


{/* ARABIC */}

<div className="mb-12">

<h3 className="text-lg font-semibold text-green-400 mb-4">
Arabic
</h3>

<p className="text-right text-3xl leading-loose text-gray-200 font-serif border-r-4 border-green-500 pr-6">
{hadith.hadithArabic || "No Arabic text"}
</p>

</div>


{/* URDU */}

<div className="mb-12">

<h3 className="text-lg font-semibold text-green-400 mb-4">
Urdu Translation
</h3>

<p className="text-lg leading-relaxed text-gray-300 border-l-4 border-green-500 pl-6">
{hadith.hadithUrdu || "No Urdu text"}
</p>

</div>


{/* ENGLISH */}

<div className="mb-12">

<h3 className="text-lg font-semibold text-green-400 mb-4">
English Translation
</h3>

<p className="text-lg leading-relaxed text-gray-300 border-l-4 border-green-500 pl-6">
{hadith.hadithEnglish || "No English text"}
</p>

</div>


{/* NAVIGATION */}

<div className="flex justify-between mt-10">

<Link
href={`/hadith/${Number(hadith.id)-1}`}
className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
>
← Previous
</Link>

<Link
href={`/hadith/${Number(hadith.id)+1}`}
className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
>
Next →
</Link>

</div>

</div>

</div>

);
}
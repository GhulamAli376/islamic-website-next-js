import Link from "next/link"

export default function Footer(){

return(

<footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-300 border-t border-green-700">

<div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

{/* BRAND */}

<div>

<h2 className="text-2xl font-bold text-yellow-400 mb-3">
🕌 Noor Islamic
</h2>

<p className="text-gray-400 leading-relaxed">
Spreading authentic Islamic knowledge through Quran,
Hadith and daily Islamic guidance.
</p>

</div>


{/* QUICK LINKS */}

<div>

<h3 className="text-lg font-semibold text-green-400 mb-4">
Quick Links
</h3>

<ul className="space-y-2">

<li>
<Link href="/" className="hover:text-yellow-400 transition">
Home
</Link>
</li>

<li>
<Link href="/quran" className="hover:text-yellow-400 transition">
Quran
</Link>
</li>

<li>
<Link href="/hadith" className="hover:text-yellow-400 transition">
Hadith
</Link>
</li>

<li>
<Link href="/allah-names" className="hover:text-yellow-400 transition">
99 Names of Allah
</Link>
</li>

<li>
<Link href="/prayer" className="hover:text-yellow-400 transition">
Prayer Times
</Link>
</li>

</ul>

</div>


{/* ISLAMIC RESOURCES */}

<div>

<h3 className="text-lg font-semibold text-green-400 mb-4">
Islamic Resources
</h3>

<ul className="space-y-2">

<li className="hover:text-yellow-400 cursor-pointer">
Islamic Calendar
</li>

<li className="hover:text-yellow-400 cursor-pointer">
Daily Hadith
</li>

<li className="hover:text-yellow-400 cursor-pointer">
Quran Recitation
</li>

<li className="hover:text-yellow-400 cursor-pointer">
Islamic Articles
</li>

</ul>

</div>

</div>


{/* BOTTOM BAR */}

<div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">

© {new Date().getFullYear()} Noor Islamic. All rights reserved.

</div>

</footer>

)

}
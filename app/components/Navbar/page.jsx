"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

const [open,setOpen] = useState(false)

return(

<header className="fixed top-0 w-full z-50">

{/* TOP BAR */}

<div className="bg-[#6b4b1f] text-white text-sm hidden md:block">

<div className="max-w-7xl mx-auto flex justify-between px-6 py-2">

<div className="flex gap-4">
<span>Follow us:</span>
<span>f</span>
<span>t</span>
<span>y</span>
</div>

<div className="flex gap-6">
<span>info@islamic.com</span>
<span>+92 304 0000000</span>
</div>

</div>

</div>

{/* MAIN NAV */}

<nav className="bg-black/70 backdrop-blur text-white border-b border-yellow-500">

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

{/* LOGO */}

<Link href="/" className="flex items-center gap-3">

<div className="w-20 h-20 rounded-full">
<img
        src="/favicon.png"
      />

</div>

<h1 className="text-4xl font-semibold">
Bismillah
</h1>

</Link>

{/* DESKTOP MENU */}

<ul className="hidden md:flex gap-8 text-sm font-medium">

<li><Link href="/" className="hover:text-orange-400 text-1xl">Home</Link></li>

<li><Link href="/quran" className="hover:text-orange-400">Quran</Link></li>

<li><Link href="/hadith" className="hover:text-orange-400">Hadith</Link></li>

<li><Link href="/prayertime" className="hover:text-orange-400">Prayer Time</Link></li>

<li><Link href="/Allahname" className="hover:text-orange-400">Allah Names</Link></li>
<li><Link href="/quiz" className="hover:text-orange-400">Quiz</Link></li>
<li><Link href="/islamicresource" className="hover:text-orange-400">Basic knowledge</Link></li>
</ul>

{/* MOBILE BUTTON */}

<button
onClick={()=>setOpen(!open)}
className="md:hidden text-2xl"
>
☰
</button>

</div>

{/* MOBILE MENU */}

{open && (

<div className="md:hidden bg-black/90 text-center py-6 space-y-4">

<Link href="/" className="block">Home</Link>
<Link href="/quran" className="block">Quran</Link>
<Link href="/hadith" className="block">Hadith</Link>
<Link href="/prayertime" className="block">Prayer Time</Link>
<Link href="/Allahname" className="block">Allah Names</Link>
<Link href="/quiz" className="block">Quiz</Link>
</div>

)}

</nav>

</header>

)

}
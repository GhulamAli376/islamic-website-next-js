"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="absolute w-full z-50">

      {/* TOP BAR */}
      <div className="bg-[#6b4b1f] text-white text-sm">
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
      <nav className="bg-black/60 backdrop-blur text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-full"></div>
            <h1 className="text-xl font-semibold">Bismillah</h1>
          </div>

          {/* MENU */}
          <ul className="flex gap-8 text-sm font-medium">

            <li className="hover:text-orange-400">
              <Link href="/">Home</Link>
            </li>

            <li className="hover:text-orange-400">
              <Link href="#">Our Blog</Link>
            </li>

            <li className="hover:text-orange-400">
              <Link href="#">More Pages</Link>
            </li>

            <li className="hover:text-orange-400">
              <Link href="#">Our Courses</Link>
            </li>

            <li className="hover:text-orange-400">
              <Link href="#">Our Services</Link>
            </li>

            <li className="hover:text-orange-400">
              <Link href="#">Contact</Link>
            </li>

          </ul>

        </div>
      </nav>

    </header>
  )
}
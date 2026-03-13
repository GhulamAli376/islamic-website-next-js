"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HadithList() {
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/hadith");
      const data = await res.json();
      setHadiths(Array.isArray(data) ? data : []);
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 p-8">
      <h1 className="text-4xl font-bold text-center text-yellow-300 mb-10">
        📜 Hadith Collection
      </h1>

      <div className="max-w-5xl mx-auto space-y-4">
        {hadiths.map((h) => (
          <Link key={`hadith-${h.id}`} href={`/hadith/${h.id}`}>
            <div className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 cursor-pointer">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-green-700 text-white font-bold rounded-full">
                  {h.id}
                </div>
                <div className="max-w-xl">
                  <h2 className="font-semibold text-gray-800">
                    {h.headingEnglish || "No Heading"}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {h.hadithEnglish || "No English text"}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-green-800 font-semibold text-sm">
                {h.book?.bookName || h.bookSlug || "Unknown Book"}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function HadithDetail() {
  const params = useParams();
  const [hadith, setHadith] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/hadith");
      const data = await res.json();
      const found = Array.isArray(data)
        ? data.find((h) => String(h.id) === String(params.id))
        : null;
      setHadith(found);
    }
    getData();
  }, [params.id]);

  if (!hadith) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-900 text-white">
        Loading Hadith...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-950 via-green-900 to-green-800 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-800 mb-3">
          {hadith.headingEnglish || "No Heading"}
        </h1>

        {/* Book badge */}
        <div className="mb-8">
          <span className="bg-green-700 text-white px-4 py-1 rounded-full text-sm">
            📚 {hadith.book?.bookName || hadith.bookSlug || "Unknown Book"}
          </span>
          <span className="ml-3 text-gray-500 text-sm">
            Hadith #{hadith.id}
          </span>
        </div>

        {/* Arabic */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-green-700 mb-4">Arabic</h3>
          <p className="text-right text-3xl leading-loose text-gray-800 font-serif border-r-4 border-green-600 pr-4">
            {hadith.hadithArabic || "No Arabic text"}
          </p>
        </div>

        {/* Urdu */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Urdu Translation
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-green-600 pl-4">
            {hadith.hadithUrdu || "No Urdu text"}
          </p>
        </div>

        {/* English */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            English Translation
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 border-l-4 border-green-600 pl-4">
            {hadith.hadithEnglish || "No English text"}
          </p>
        </div>
      </div>
    </div>
  );
}
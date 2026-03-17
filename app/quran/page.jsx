import { headers } from "next/headers"
import QuranSearch from "./quransearch/pages"

export const metadata = {
  title: "Quran | Read & Learn Islamic Knowledge",
  description:
    "Explore Islamic knowledge, quizzes, prayer times and learn about Islam in an interactive way.",
}

async function getSurahs() {
  try {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${base}/api/quran/surah`, { cache: "no-store" });
    const data = await res.json();

    if (!data) return [];

    const surahs = data;

    surahs.sort((a, b) => a.number - b.number);

    return surahs;

  } catch (err) {
    console.log("Error fetching surahs:", err);
    return [];
  }
}

export default async function QuranPage() {

  const surahs = await getSurahs()

  return <QuranSearch surahs={surahs} />

}
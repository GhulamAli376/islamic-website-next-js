import Link from "next/link";
import QuranSearch from "./quransearch/pages";
export const metadata = {
  title: "Quran | Read & Learn Islamic Knowledge",
  description:
    "Explore Islamic knowledge, quizzes, prayer times and learn about Islam in an interactive way.",
};
async function getSurahs() {

const res = await fetch("http://localhost:3000/api/quran/surah",{
cache:"no-store"
})

const data = await res.json()

// SORT BY NUMBER
data.sort((a,b)=> a.number - b.number)

return data

}

export default async function QuranPage() {

const surahs = await getSurahs()

return <QuranSearch surahs={surahs} />

}
import { headers } from "next/headers"
import QuranSearch from "./quransearch/pages"

export const metadata = {
  title: "Quran | Read & Learn Islamic Knowledge",
  description:
    "Explore Islamic knowledge, quizzes, prayer times and learn about Islam in an interactive way.",
}

async function getSurahs() {

  const host = headers().get("host")
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"

  const res = await fetch(`${protocol}://${host}/api/quran/surah`, {
    cache: "no-store"
  })

  const data = await res.json()

  data.sort((a,b)=> a.number - b.number)

  return data
}

export default async function QuranPage() {

  const surahs = await getSurahs()

  return <QuranSearch surahs={surahs} />

}
import { cacheAPI } from "@/lib/cacheApi"

export async function GET() {
  try {
    const data = await cacheAPI(
      "surahs",
      "https://api.alquran.cloud/v1/surah",
      "data"
    )

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })

  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: "Failed to fetch" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
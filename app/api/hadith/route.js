import { cacheAPI } from "@/lib/cacheApi";



export async function GET() {
  try {
    const hadiths = await cacheAPI(
      "hadiths",
      "https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$xDcHYXjVPOc4WrCIIHu8UCDmCiwbR3sFArB2l0KcQ6WJW9KcUpC",
      "hadiths.data"  // <-- nested path to the array
    );

    return new Response(JSON.stringify(hadiths), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("❌ Error in /api/hadith:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

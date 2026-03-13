import { connectToDB } from "@/lib/mongodb"
import { cacheAPI } from "@/lib/cacheApi"

export async function GET() {

  const data = await cacheAPI(
    "duas",
    "https://dua-data-api.vercel.app/api/usefulDuas",
    
  )

  return Response.json(data)
}

import { cacheAPI } from "@/lib/cacheApi"

export async function GET() {

  const data = await cacheAPI(
    "allahnames",
    "https://api.aladhan.com/v1/asmaAlHusna",
    "data"
  )

  return Response.json(data)
}
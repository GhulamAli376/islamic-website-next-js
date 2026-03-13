import { cacheAPI } from "@/lib/cacheApi"

export async function GET(){

const data = await cacheAPI(
  "surahs",
  "https://api.alquran.cloud/v1/surah",
  "data"
)

return Response.json(data)

}
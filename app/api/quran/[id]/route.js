import { connectToDB } from "@/lib/mongodb"

export async function GET(req, context){

const params = await context.params
const id = params.id

const db = await connectToDB()
const collection = db.collection("surahDetails")

// Mongo cache check
const existing = await collection.findOne({ surah:id })

if(existing){
console.log("✅ Surah served from MongoDB")
return Response.json(existing.data)
}

// fetch API
const res = await fetch(
`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ur.jalandhry`
)

const result = await res.json()

await collection.insertOne({
surah:id,
data:result.data
})

console.log("💾 Surah saved to MongoDB")

return Response.json(result.data)

}
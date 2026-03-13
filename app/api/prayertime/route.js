import { connectToDB } from "@/lib/mongodb"

export async function GET(){

const db = await connectToDB()
const collection = db.collection("calendar")

// check mongo cache
const existing = await collection.findOne({})

if(existing){
console.log("✅ Prayer time served from MongoDB")

return Response.json({
date: existing.date,
timings: existing.timings
})
}

// fetch API
const res = await fetch(
"https://api.aladhan.com/v1/timingsByCity?city=Karachi&country=Pakistan&method=1"
)

const data = await res.json()

const finalData = {
date: data.data.date,
timings: data.data.timings
}

// save in mongo
await collection.insertOne(finalData)

console.log("💾 Prayer time saved in MongoDB")

return Response.json(finalData)

}
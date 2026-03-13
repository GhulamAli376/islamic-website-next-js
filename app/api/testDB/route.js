import { connectToDB } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await connectToDB()
    const collections = await db.collections()
    const names = collections.map(c => c.collectionName)
    return new Response(JSON.stringify({ message: "DB connected!", collections: names }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
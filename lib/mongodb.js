// lib/mongodb.js
import { MongoClient } from "mongodb"

let client
let clientPromise

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI)
  global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise

export async function connectToDB() {
  const client = await clientPromise
  const db = client.db("islamicPortal") // ye aapka database name
  return db
}
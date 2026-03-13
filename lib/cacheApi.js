import { connectToDB } from "./mongodb";

// lib/cacheApi.js
export async function cacheAPI(collectionName, url, dataPath) {
  console.log(`⚡ Fetching ${collectionName} from third-party API...`);
  
  const db = await connectToDB();
  const collection = db.collection(collectionName);

  // Check MongoDB first
  const existing = await collection.find({}).toArray();
  if (existing.length > 0) {
    console.log(`✅ ${collectionName} served from MongoDB`);
    return existing;
  }

  // Fetch from API
  const res = await fetch(url);
  const data = await res.json();
  console.log("API response:", data);

  // Extract array safely
  let finalData;
  if (dataPath) {
    const parts = dataPath.split("."); // support nested keys like "hadiths.data"
    finalData = parts.reduce((acc, key) => (acc ? acc[key] : undefined), data);
  } else {
    finalData = data;
  }

  // Ensure it's an array
  if (!Array.isArray(finalData)) {
    console.warn(`⚠️ cacheAPI: expected array but got:`, finalData);
    return [];
  }

  // Optional: add safe defaults
  const cleanedData = finalData.map(item => ({
    ...item,
    book: item.book || { bookName: "Unknown" }
  }));

  // Save to MongoDB
  if (cleanedData.length > 0) {
    await collection.insertMany(cleanedData);
    console.log(`💾 ${collectionName} saved to MongoDB`);
  }

  return cleanedData;
}
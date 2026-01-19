const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://preet:<db_password>@ngo-part.epjsj7u.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("myDB");           // database name
    const collection = database.collection("children"); // collection name

    // Get all documents
    const docs = await collection.find({}).toArray();
    console.log(docs);
  } finally {
    await client.close();
  }
}

run().catch(console.error);

import 'dotenv/config';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Replace the uri string with your connection string
const uri = `mongodb+srv://donny_444:${process.env.MONGO_PASSWORD}@cluster0.kj7szuz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("myFirstDatabase").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    Findveganpizza();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function Findveganpizza() {
  const database = await client.db("myFirstDatabase");
  const orders = await database.collection("orders");

  // Query for a order that have the name 'Vegan'
  const query = { name: "Vegan" };
  const order = await orders.findOne(query);

  console.log(order);
}

async function InsertCJ() {
  const database = await client.db("test");
  const collection = await database.collection("sample");

  const query = { name: "Carl Johnson" };
  const insert = await collection.insertOne(query);

  console.log(insert);
}

async function Insertfamily() {
  const database = await client.db("test");
  const sample = await database.collection("sample");

  const query = [{ name: "Sweet Johnson" }, { name: "Kendl Johnson" }];
  const insert = await sample.insertMany(query);

  console.log(insert);
}

async function UpdateCJ() {
  const database = await client.db("test");
  const sample = await database.collection("sample");

  const query = { name: "Carl Johnson" };
  const exec = { $push: { "gang": "Grove Street Families" } };
  const update = await sample.updateOne(query, exec);

  console.log(update);
}

async function UpdateFamily() {
  const database = await client.db("test");
  const sample = await database.collection("sample");
}
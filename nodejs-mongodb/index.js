require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

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

    const database = client.db("myFirstDatabase");
    const orders = database.collection("orders");

    // Query for a order that have the name 'Vegan'
    const query = { name: "Vegan" };
    const order = await orders.findOne(query);

    console.log(order);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
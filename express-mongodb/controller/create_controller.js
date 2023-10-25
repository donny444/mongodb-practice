const client = require("../database.js");

async function testCreate(req, res) {
    try {
        const { firstname, lastname } = req.body;

        const database = await client.db("test");
        const collection = await database.collection("sample");

        const document = { firstname: firstname, lastname: lastname };
        const result = await collection.insertOne(document);
        return res.status(201).send(result);
    } catch(err) {
        console.error(err);
    }
}

module.exports = { testCreate };
const client = require("../database.js");

async function testUpdate(req, res) {
    try {
        const { lastname, newLastname } = req.body;

        const database = await client.db("test");
        const collection = await database.collection("sample");

        const filter = { lastname: lastname };
        const update = { $set: { lastname: newLastname} };
        const result = await collection.updateOne(filter, update);
        return res.status(200).send(result);
    } catch(err) {
        console.error(err);
    }
}

module.exports = { testUpdate };
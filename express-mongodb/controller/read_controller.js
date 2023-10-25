const client = require("../database.js");

async function testRead(req, res) {
    try {
        const { lastname } = req.body;

        const database = await client.db("test");
        const collection = await database.collection("sample");

        const query = { lastname: lastname };
        const result = await collection.findOne(query);
        return res.status(200).send(result);
    } catch(err) {
        console.error(err);
    }
}

module.exports = { testRead };
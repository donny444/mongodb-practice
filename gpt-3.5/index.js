const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'your-database-name';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function (err) {
    if (err) {
        console.error('Failed to connect to the database:', err);
        return;
    }

    console.log('Connected successfully to the database');

    const db = client.db(dbName);

    // Perform database operations here
    const collection = db.collection('your-collection-name');

    const document = { name: 'John Doe', age: 30 };

    collection.insertOne(document, function (err, result) {
        if (err) {
            console.error('Failed to insert document:', err);
            return;
        }

        console.log('Document inserted successfully:', result.ops);
    });

    // Close the MongoDB client
    client.close();
});

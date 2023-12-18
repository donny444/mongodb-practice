const mongoose = require("mongoose");

var holdingSchema = new Schema({
    // You might expect `asset` to be an object that has 2 properties,
    // but unfortunately `type` is special in Mongoose so mongoose
    // interprets this schema to mean that `asset` is a string
    asset: {
        type: String,
        ticker: String
    }
});

var holdingSchema = new Schema({
    asset: {
        // Workaround to make sure Mongoose knows `asset` is an object
        // and `asset.type` is a string, rather than thinking `asset`
        // is a string.
        type: { type: String },
        ticker: String
    }
});

const schema1 = new Schema({
    test: String // `test` is a path of type String
});

const schema2 = new Schema({
    // The `test` object contains the "SchemaType options"
    test: { type: String } // `test` is a path of type string
});
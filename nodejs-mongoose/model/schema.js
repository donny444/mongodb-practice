const mongoose = require("mongoose");

const schema = new mongoose.Schema({ _id: Number });
schema.path("_id");

const Model = mongoose.model("Test", schema);

const doc = new Model();
doc._id instanceof mongoose.Types.ObjectId;
await doc.save();

doc._id = 1;
await doc.save();
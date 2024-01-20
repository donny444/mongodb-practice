const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({ name: "String" });

const parentSchema = new mongoose.Schema({

    //array of subdocuments
    children: [childSchema],

    //single nested subdocuments
    child: childSchema
});

const Child = mongoose.model("Child", childSchema);
const Parent = mongoose.model("Parent", parentSchema);

const martha = new Parent({ child: { name: "Bruce" } });
const anakin = new Parent({ children: [{ name: "Luke" }, { name: "Leia" }] });
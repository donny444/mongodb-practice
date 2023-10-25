require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const createRouter = require("./routes/create_router.js");
const readRouter = require("./routes/read_router.js");
const updateRouter = require("./routes/update_router.js");
const deleteRouter = require("./routes/delete_router.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/create", createRouter);
app.use("/read", readRouter);
app.use("/update", updateRouter);
app.use("/delete", deleteRouter);

app.use(function(req, res, next) {
    res.status(404).json({
        message: "No such route exists"
    })
})

app.use(function(err, req, res , next) {
    res.status(err.status || 500).json({
        message: "Error Message"
    })
})

module.exports = app;
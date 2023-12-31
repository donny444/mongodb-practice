import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/blog-post").
    catch(error => console.log("Error connecting to database"));

mongoose.connection.on("connected", () => console.log("Connected to database"));

import routes from "./router/routes.js";

app.use("/", routes);

export default app;
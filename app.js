const express = require("express");
const serverRouter = require("./server/routes/main-router");
const hbs = require('hbs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials('./server/views/partials');
app.set("views", "./server/views");

app.use(express.static("./public"));
app.use("/", serverRouter);

app.listen(port);
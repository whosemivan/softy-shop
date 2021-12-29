const express = require("express");
const serverRouter = require("./server/routes/main-router");
const dbRouter = require("./server/routes/dbRouter");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials('./server/views/partials');
app.set("views", "./server/views");

app.use(express.static("./public"));
app.use("/", serverRouter);
app.use("/api", dbRouter);

app.listen(port);
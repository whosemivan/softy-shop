const express = require("express");
const serverRouter = require("./server/routes/main-router");

const app = express();
const port = process.env.PORT || 8080;

// По поводу этого не уверен
app.use(express.json());

app.set("view engine", "hbs");
app.set("views", "./server/views");

app.use(express.static("./public"));
app.use("/", serverRouter);

app.listen(port);
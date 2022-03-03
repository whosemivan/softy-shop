const express = require("express");
const serverRouter = require("./server/routes/mainRouter");
const dbRouter = require("./server/routes/dbRouter");
const authRouter = require("./server/routes/authorization/authRouter");
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.set("view engine", "hbs");
hbs.registerPartials('./server/views/partials');
app.set("views", "./server/views");

app.use(express.static("./public"));
app.use("/", serverRouter);
app.use("/api", dbRouter);
app.use("/auth", authRouter)

app.listen(PORT, (e) => e ? "" : console.log(`PIP, you port ${PORT}`));
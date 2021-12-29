const router = require("express").Router();
const db = require("./db.js");
const mongodb = require('mongodb');

router.post("/add", (req, res) => {
    console.log(req.body);
    const client = db();
    client.connect(err => {
        if (err) {
            console.log(err);
        } else {
            const table = client.db("products");
            const col = table.collection("pajamas");
            col.insertOne(req.body, err => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({ msg: "done" });
                }
                client.close();
            });
        }
    });
});

router.get("/pajamas", (req, res) => {
    const client = db();
    client.connect(err => {
        if (err) {
            res.send({ "msg": "Error connection" });
            client.close();
        } else {
            const table = client.db("products");
            const col = table.collection("pajamas");
            col.find().toArray((error, data) => {
                if (error) {
                    console.log(error);
                }
                console.log(data);
                res.send({ "data": data });
                client.close();
            });
        }

    });
});


module.exports = router;
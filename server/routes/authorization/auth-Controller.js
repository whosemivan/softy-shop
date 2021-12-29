const db = require("../db.js");

class authController {
    async registration(req, res) {
        const client = db();
        client.connect(err => {
            if (err) {
                print(err);
                client.close();
                return;
            }

            const table = client.db("auth");
            const col = table.collection("users");
            try {
                const {username} = req.body;
                const user = col.findOne({username});
                user.then((e) => {
                    if (e) { return res.send({msg: "Имя пользователя занято"}); };
                    col.insertOne(req.body, err => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send({msg: "Регистрация прошла успешно"});
                        }
                    });
                });
            } catch (e) {
                console.log(e);
            };
        });
        client.close();
    };

    async login(req, res) {
        const client = db();
        client.connect(err => {
            if (err) {
                print(err);
                client.close();
                return;
            }

            const table = client.db("auth");
            const col = table.collection("users");
            try {
                const {username, password} = req.body;
                const user = col.findOne({username});
                user.then((e) => {
                    if (!e) {
                        return res.send({msg: "Пользователь не существует"});
                    };
    
                    if (password == e["password"]) {
                        return res.send({msg: "Авторизация прошла успешно", data: e["_id"]});
                    } else {
                        return res.send({msg: "Пароль не подходит"});
                    };
                });
            } catch (e) {
                console.log(e);
            };
        });
        client.close();
    };

    async getUser(req, res) {
        const client = db();
        client.connect(err => {
            if (err) {
                print(err);
                client.close();
                return;
            }

            const table = client.db("auth");
            const col = table.collection("users");
            try {
                const users = col.find();
                res.json(users);
            } catch (e) {
                console.log(e);
        };
        });
        client.close();
    };
};

module.exports = new authController();
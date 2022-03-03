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
                const {login} = req.body;
                const user = col.findOne({login});
                user.then((e) => {
                    if (e) { return res.send({msg: {status: 400, text: "Имя пользователя занято"}}); };
                    col.insertOne(req.body, err => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send({msg: {status: 200, text: "Регистрация прошла успешно"}});
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
                const {login, password} = req.body;
                const user = col.findOne({login});
                user.then((e) => {
                    if (!e) {
                        return res.send({msg: {status: 401, text: "Пользователь не существует"}});
                    };
    
                    if (login == e["login"] && password == e["password"]) {
                        console.log(e["password"])
                        return res.send({msg: {status: 201, text: "Авторизация прошла успешно"}, data: e["_id"]});
                    } else {
                        return res.send({msg: {status: 402, text: "Пароль не подходит"}});
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
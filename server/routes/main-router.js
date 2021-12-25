const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        title: "Главная страница"
    });
});

router.get("/catalog", (req, res) => {
    res.render("catalog", {
        title: "Каталог",
        className: "body-catalog"
    });
});

module.exports = router;
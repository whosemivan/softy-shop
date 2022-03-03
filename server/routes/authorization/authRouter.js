const router = require("express").Router();
const mongodb = require('mongodb');
const controller = require("./authController")

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.get("/users", controller.getUser);

module.exports = router;
const { getUsers, createUser } = require("./controllers/Users")

const router = require("express").Router()

router.get("/get-users", getUsers)
router.post("/add-user", createUser)

module.exports = router
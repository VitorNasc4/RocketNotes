const { Router } = require("express")
const usersRoutes = require("./user.routes")

const routes = Router()

routes.use("/user", usersRoutes)

module.exports = routes
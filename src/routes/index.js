const { Router } = require("express")
const usersRoutes = require("./user.routes")
const notesRoutes = require("./note.routes")
const tagsRoutes = require("./tag.routes")

const routes = Router()

routes.use("/user", usersRoutes)
routes.use("/notes", notesRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes
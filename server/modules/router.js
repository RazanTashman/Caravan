const router= require('express').Router()
const controller = require('./controller.js')
router.post("/home",controller.addTodo)

module.exports = router
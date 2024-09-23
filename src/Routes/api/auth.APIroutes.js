const express = require('express')
const {Router} = express
const {ApiResponse} = require("../../Utils/api.Response.js")
const {CreateUser} = require('../../controller/user.controller.js')
const _ = Router()
_.route("/regestration").post(CreateUser)

module.exports = _
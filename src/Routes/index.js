var express = require('express')
const {Router} = express;
const _ = Router();
const authRoutes = require("../Routes/api/auth.APIroutes.js")
const {ApiError} = require('../Utils/apiERROR.js')

_.use(process.env.BASE_URL , authRoutes)
_.use(process.env.BASE_URL , (req,res)=>{
  res.status(400).json(new ApiError(false, null, 404, "Api Routes InValid !!"))
})
module.exports = _;
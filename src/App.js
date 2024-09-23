const express = require('express')
const chalk = require('chalk')
const allRoutes = require('./Routes/index.js')
const cors = require("cors")
const app = express()

//all midlwere
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(allRoutes);


app.listen(process.env.PORT || 3000, ()=>{
  console.log(chalk.bgGreen.bold(`Server connected on port http://localhost:${process.env.PORT}`));
})

const mongoose = require('mongoose')
console.log(process.env.DATABASE__URL);
const {DBName} = require('../constant/constant.js')
const chalk = require('chalk')
const DbConfigaration = async()=>{
try {
  const connectionInfo = await mongoose.connect(`${process.env.DATABASE__URL}/${DBName}`) 
  console.log(chalk.bgBlue.bold`MongoDb Connected !! DB Host !! ${
    (await  connectionInfo).connection.host
  }`
);
  
} catch (error) {
  console.log(chalk.bgRedBright.bold (error));
  
}  
}

module.exports = {DbConfigaration}
require('dotenv').config()
const {DbConfigaration} = require('./DatabaseConfigartion/DBConfigartion')
const app = require('../src/App.js')

DbConfigaration();

const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  FirstName:{
    type: String,
    required: [true , "FirstName Missing!!"],
    trim: true,
    max: [25, "Max Name Size 25 charecter"],
    min: [25, "Min Value 3 charecter"]
  },
  LastName:{
    type: String,
    trim: true,
    max: [25, "Max Name Size 25 charecter"],
    min: [25, "Min Value 3 charecter"]
  },
  Email_Adress:{
    type: String,
    unique: true,
    required: [true , "Email Missing!!"],
  },
  Telephone:{
    type: String,
    required: [true , "Telephone Number Missing!!"],
  },
  Adress1:{
    type: String,
    required: [true , "Adress1 Number Missing!!"],
  },
  Adress2:{
    type: String,
  },
  City: {
    type: String,
    required: [true, "City Missing !!"],
  },
  Postcode:{
    type: Number,
    max: [4, "Invalid Post Code max size 4!!"],
    min: [4, "Invalid Post Code max size 4!!"],
  },
  Divison:{
    type: String,
  },
  Password:{
    type: String,
    required: true,
    trim: true
  },
  OTP:{
    type: Number,
  }, 
  role :{
    type: String,
    enum: ["admin", "user", "marchent"],
    default: 'user'
  },
  refresherToken: {
    type : String,
  },
  avatar: {
    type : String
  }
},
{ timestamps: true }
);

const usermodel = mongoose.model('user', UserSchema)
module.exports = {usermodel}
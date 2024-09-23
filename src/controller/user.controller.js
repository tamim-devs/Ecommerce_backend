const ApiError = require("../Utils/apiERROR.js")
const ApiResponse = require("../Utils/api.Response.js")
const {asyncHandler} = require("../Utils/asyncHandler.js")
const {Usermodel, usermodel} = require("../Model/User.model.js")

/**
 * todo createuser contoller implement
 * @param {{req.body}} req 
 * @param {{ }} res 
 */

const CreateUser = asyncHandler(async(req,res)=>{
const  {FirstName, LastName, Email_Adress, Telephone, Adress1, City, Password} = req?.body;
console.log(FirstName, LastName, Email_Adress, Telephone, Adress1, City,  Password);

if (!FirstName) {
  res.send(404).json(new ApiError(false, null, 400, `FirstName Missing!!`))
}
if (!LastName) {
  res.send(404).json(new ApiError(false, null, 400, `LastName Missing!!`))
}
if (!Email_Adress) {
  res.send(404).json(new ApiError(false, null, 400, `Email_Adress Missing!!`))
}
if (!Telephone) {
  res.send(404).json(new ApiError(false, null, 400, `Telephone Missing!!`))
}
if (!Adress1) {
  res.send(404).json(new ApiError(false, null, 400, `Adress1 Missing!!`))
}
if (!Password) {
  res.send(404).json(new ApiError(false, null, 400, `Password Missing!!`))
}
if (!City) {
  res.send(404).json(new ApiError(false, null, 400, `City Missing!!`))
}

// send information

try {
    const Users = await new usermodel({
    FirstName, LastName, Email_Adress, Telephone, Adress1, City,  Password
  }).save();
} catch (error) {
  console.log(error);
  
}


  if (Users) {
   return res.status(200).json(new ApiResponse(true ,Users,200,null,"Regestration Sucessfull"))
  }
  

})  

// try {
// const  {FirstName, LastName, Email_Adress, Telephone, Adress1,  Password} = req.body;
// if(!FirstName){

// }
// } catch (error) {
//   console.log(error);
  
// }
module.exports= {CreateUser}
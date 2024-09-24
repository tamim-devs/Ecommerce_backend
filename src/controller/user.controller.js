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


// send information

try {

  const  {FirstName, LastName, Email_Adress, Telephone, Adress1, City, Password} = req?.body;
console.log(FirstName, LastName, Email_Adress, Telephone, Adress1, City,  Password);

if (!FirstName) {
  return res.send(404).json(new ApiError(false, null, 400, `FirstName Missing!!`))
}
if (!LastName) {
  return res.send(404).json(new ApiError(false, null, 400, `LastName Missing!!`))
}
if (!Email_Adress) {
  return res.send(404).json(new ApiError(false, null, 400, `Email_Adress Missing!!`))
}
if (!Telephone) {
  return res.send(404).json(new ApiError(false, null, 400, `Telephone Missing!!`))
}
if (!Adress1) {
  return res.send(404).json(new ApiError(false, null, 400, `Adress1 Missing!!`))
}
if (!Password) {
 return res.send(404).json(new ApiError(false, null, 400, `Password Missing!!`))
}
if (!City) {
  return res.send(404).json(new ApiError(false, null, 400, `City Missing!!`))
}

      // Check if users all ready exist or not

      const ExistUser = await usermodel.find({$or:[{FirstName:FirstName}, {Email_Adress:Email_Adress}, ]});
      if(ExistUser?.length){
        return  res.send(404).json(new ApiError(false, null, 400, `${ExistUser[0]?.FirstName} all ready exist`))
      };
    

    const Users = await new usermodel({
    FirstName, LastName, Email_Adress, Telephone, Adress1, City,  Password
     }).save();
     res.send(Users);

     if (Users) {
      return res.status(200).json(new ApiResponse(true ,Users,200,null,"Regestration Sucessfull"))
    }

    } catch (error) {
     console.log(error);
     return  res.send(404).json(new ApiError(false, null, 400, `Regestration controlla Error!!: ${ExistUser[0]?.FirstName} `))
    }


  

    })  


module.exports= {CreateUser}
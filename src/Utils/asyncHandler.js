const {ApiError} = require("../Utils/apiERROR.js")

const asyncHandler = (fun = ()=>{}) =>{
  return async (req,res,next)=> {
    try {
        await fun(req,res,next);
    } catch (error) {
       new ApiError(false , null , 500, "Async Handeler Error : "+error )
    }
} 
}

module.exports = {asyncHandler}
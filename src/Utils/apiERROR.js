class ApiError{
  constructor(sucess= false, data= {}, statusCode= 400,message= "ERROR Occurs" ){
      this.sucess = sucess,
      this.data = data,
      this.statusCode = statusCode,
      this.message = message
  }

}


module.exports = {ApiError}
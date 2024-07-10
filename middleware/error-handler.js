const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {

  let customError = {
    //set default
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong'
  }
  
  if(err.name === 'ValidationError'){
    customError.msg = Object.values(err.errors)
    .map((item)=>item.message)
    .json(',')
    customError.statusCode = 400
  }

  if(err.code && err.code === 1100){
    customError.msg = `Duplicate value entered foor ${Object.keys(err.keyValue)} field, pleases choose another value`
    customError.statusCode =400
  }

  if(err.name === 'CastError'){
    customError.msg = `No item found with id : ${err.value}`
    customError.statusCode = 404
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')


const registor = async (req,res)=>{
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token})
}
const login = async (req,res)=>{
    const {email, password} = req.body
    if(!email || !password){
        throw new BadRequestError('Please provide email and password')
    }
    
    const user = await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid credentials')
    }
    
    //compare the password
    const isPasswordCorrect = await user.checkPassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid credentials')
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name},token})
}

module.exports = {registor,login}
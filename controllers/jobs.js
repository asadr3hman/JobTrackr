const Job = require("../models/Job")
const { NotFoundError, BadRequestError } = require('../errors')
const { StatusCodes } = require("http-status-codes")

const getJobs = async (req,res)=>{
    const jobs = await Job.find({createdBy:req.user.userId}).sort('creatadAt')
    res.status(StatusCodes.OK).json({jobs, count: jobs.length})
}
const getJob = async (req,res)=>{
    const {user:{userId},params:{id:jobId}}=req

    const job = await Job.findOne({_id:jobId,
        createdBy:userId})
    if(!job){ 
        throw new NotFoundError(`No job with the id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
}
const deleteJob = async (req,res)=>{
    const {user:{userId},
    params:{id:jobId}}=req
    const job = await Job.findOneAndDelete({
        _id: jobId,
        createdBy: userId
    })
    if(!job){
        throw new NotFoundError(`No job with the id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
}
const updateJob = async(req,res)=>{
    const {
        body:{company,position},
        user:{userId},
        params:{id:jobId}}=req
    if(company == '' || position == ' '){
        throw new BadRequestError('Company or Position fields can not be empty')
    }
    const job = await Job.findByIdAndUpdate({_id:jobId, createdBy:userId},
        req.body,
        {new:true,runValidators:true})
    if(!job){
        throw new NotFoundError(`No job with the id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({job})
}
const createJob = async (req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)

    res.status(StatusCodes.CREATED).json({job})
}
module.exports = {
    getJobs,
    getJob,
    deleteJob,
    updateJob,
    createJob
}
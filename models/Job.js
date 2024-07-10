const mongoose = require('mongoose')

const Jobs = new mongoose.Schema(
    {
        company:{
            type:String,
            required:[true,'Please provide company name'],
            maxlength:50,
        },
        position:{
            type:String,
            required:[true,'Please provide Position'],
            maxlength:100,
        },
        status:{
            type:String,
            enum:['interview','declined','panding'],
            default:'panding'
        },
        createdBy:{
            type:mongoose.Types.ObjectId,
            required:[true,'Please provide company name'],
            ref:'User'
        },
    },{timestamps:true}
)

module.exports = mongoose.model('Jobs',Jobs)
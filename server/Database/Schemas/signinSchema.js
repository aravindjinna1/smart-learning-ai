const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema(

    {
    Email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,
    },

    Password:{
        type:String,
        required:true,

    },

},

{
    timestamps: true,
} 

)

module.exports = mongoose.model("Signin",loginSchema);

const {Schema,model} = require("mongoose");

module.exports.Otp = model('Otp', Schema({
    number : {
        type:String,
        required:true
    },

    otp:{
        type:String,
        required :true
    },

    createAt:{ type: Date, default:Date.now, index:{expires:300}}    //<======OTP Expires in 5 mins

}, {timestamps:true}))
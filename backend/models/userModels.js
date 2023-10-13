const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone: {
        type: Number
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String
    }
})

userSchema.pre('save',async function (next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt);

})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

const jwt = require("jsonwebtoken")

userSchema.methods.generateToken = async function ()  (res,userId) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

    res.cookie('jwt',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !== 'development',
    sameSite:'strict' ,
    maxAge: 30 * 24* 60 *1000

})
}

const User = mongoose.model('User', userSchema);
module.exports = User
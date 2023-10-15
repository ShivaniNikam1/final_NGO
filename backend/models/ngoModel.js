const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs');

const ngoSchema = mongoose.Schema({
    ngoName:{
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
    },
    logoimage: {
        type: String, // Assuming you want to store the image URL or file path
        required: false // Optional, you can set it to true if the image is mandatory
    },
    ngoCertificate :{
        type:String,
        required:false
    },
    startTime: {
        type: Date, // Field for NGO opening time
        required: false
    },
    endTime: {
        type: Date, // Field for NGO closing time
        required: false
    }
   
})

ngoSchema.pre('save',async function (next) {
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt);

})

ngoSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

const Ngo = mongoose.model('Ngo', ngoSchema);
module.exports = Ngo
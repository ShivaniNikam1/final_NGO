const ngoModel = require("../models/ngoModel")
const {generateToken} = require('../utils/generateToken')



exports.registerNgo = async(req, res) =>{
    try {
        const existingNgo = await ngoModel.find({ email: req.body.email });

        if (existingNgo.length > 0) {
            res.status(200).json("exists");
        } else {
            const newNgo = new ngoModel({
                ngoName: req.body.ngoName,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                location: req.body.location,
                logoimage :req.body.logoimage,
                ngoCertificate:req.body.ngoCertificate,
                startTime:req.body.startTime,
                endTime:req.body.endTime
            });

            const savedNgo = await newNgo.save();
            res.status(200).json(savedNgo);
        }
    } catch (error) {
        console.log(error);
        // You might want to send an error response here as well
        res.status(500).json({ error: "An error occurred while registering the Ngo" });
    }
}

exports.authNgo = async (req,res) => 

{
    try{

        const {email,password} = req.body
        const ngo = await ngoModel.findOne({email})
        if(ngo && (await ngo.matchPassword(password))){
         generateToken(res,ngo._id)
         const passing = {
           message : "Success",
           sendUser : ngo,
         };
         res.status(201).json(passing)
     }else{
         res.status(401);
         throw new Error('Invalid email or passsword')
     }
 
     }catch(error){
         console.log(error)
     }
}


exports.logoutNgo = async(req,res) =>{
    

    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0),
        path:'/'
    })
   res.status(200).json({message:'User logged out '})
  }
  
//   exports.getNgoProfile = async (req, res) => {
   
//       const ngo = {
//         // _id: req.ngo._id,
//         ngoName: req.ngo.ngoName,
//         email: req.ngo.email
//       }
//       res.status(200).json(ngo);
    
     

//   };
  

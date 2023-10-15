const express = require('express')
const dotenv= require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')

const userRoute = require("./routes/userRoutes")
const ngoRoute = require("./routes/ngoRoutes")



const mongoose = require("mongoose");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

 const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected");
    } catch(error){
        console.log(error);
    }
}



connectDB();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:['POST','GET'],
    credentials:true
}))

app.use("/api/ngos",ngoRoute)
app.use("/api/users",userRoute)

app.listen(5000, () => console.log("Server is running on port 5000"));


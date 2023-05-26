// import modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { userRouter } from './routes/user.js';
import session from 'express-session';
import cookieParser from 'cookie-parser'
//app
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(cookieParser());

                      // i need give access to images folder
app.use('/images', express.static('images'));

            // Configure session middleware
app.use(session({
    secret: "key", // Secret used to sign the session ID cookie
    resave: true, // Don't save session if unmodified
    saveUninitialized: true, // Don't create session until something is stored
  }));
//db
try{
  await mongoose.connect('mongodb://localhost:27017/school')
    console.log("mongoconnected")
} catch(err){
    console.log(err)
}


// routes
app.use(userRouter)
app.get("/", (req,res)=>{
   res.send("HelloWorld")
})

//port
const port = process.env.PORT || 3002;


//lister
const server = app.listen(port, () =>{
    console.log(`server is running in on port ${port}`)
})
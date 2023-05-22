import bcrypt from 'bcrypt';
import express from 'express';
import {StudentDetails} from '../models/StudentDetails.js';


const StudentController = async (req ,res) =>{
     console.log(req.file)
const { Studentname,Date,Age,Email,Password,RePassword,Number } = req.body

try{
 if(!req.file){
  return res.status(400).send({ error : "Pls select a Picture" })
 }
 if( !Studentname|| !Date || !Age || !Email || !Password || !RePassword || !Number) {
    return res.status(400).send({ error : "All Filed Are Required" })
 }
 if (Password !== RePassword) {
    return res.status(400).send({ error: "Passwords do not match" });
  }
  
  const emailExists = await StudentDetails.findOne({ Email });


  if(emailExists){
    return res.status(403).send({ error: "Email Already Exits" });
}

  const hashedPassword = await bcrypt.hash(Password, 10);

  const studentdetails= new StudentDetails ({
    Studentname,
    Date,
    Age,
    Email,
    Password:hashedPassword,
    Number,
    Path:req.file ? req.file.path : null, // Include the file path if it exists
  });
  await studentdetails.save();
  return res.status(201).send(studentdetails);
} catch(error){
    console.error(error);
    return res.status(500).send({ error: "An unexpected error occurred" });
}

}
export {StudentController}





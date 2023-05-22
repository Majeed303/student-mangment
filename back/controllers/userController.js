import express from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

const signupController = async (req, res) => {

  const { email, password, phone, username } = req.body;

  if (!email || !password || !phone || !username) {
    return res.status(400).send({ error: "All fields are required" });
  }

     const emailExists = await User.findOne({ email });

     if(emailExists)

     return res.status(403).send({error:"Email already exists"});

     const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
    email,
     password : hashedPassword,
     phone,
     username
    });
    await user.save();

    return res.status(201).send(user);
    }
export { signupController }
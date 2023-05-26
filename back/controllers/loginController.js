import express from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    // Password is correct, authentication successful
    req.session.user = user;
    req.session.save();

    return res.status(200).send(user);  
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "An unexpected error occurred" });
  }
};

export { loginController };

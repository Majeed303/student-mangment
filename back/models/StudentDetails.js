import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    Studentname: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },      
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Number: {
        type: String,
        required: true,
    },
    Path:{
        type: String,
        required: true,
    }

  });

const StudentDetails = mongoose.model('StudentDetails', userSchema);

export { StudentDetails };
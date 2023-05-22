import {StudentDetails} from '../models/StudentDetails.js';

 const studentdetail = async (req,res) =>{
    try {
        const students = await StudentDetails.find();
        res.status(200).json(students);
      } catch (error) {
        console.error('Error fetching student details:', error);
        res.status(500).json({ error: 'An error occurred. Please try again.' });
      }
    };
export {studentdetail}
import {StudentDetails} from '../models/StudentDetails.js';
    
const Studentdelte = async (req, res) => {
    const studentId = req.params.id;
    
    try {
      // Find the student by ID and delete it from the database
      const deletedStudent = await StudentDetails.findByIdAndDelete(studentId);
      if (!deletedStudent) {
        return res.status(404).json({ error: 'Student not found.' });
      }
    
      console.log('Student deleted:', deletedStudent);
      return res.sendStatus(204);
    } catch (error) {
      console.error('Error deleting student:', error);
      return res.status(500).json({ error: 'Failed to delete student.' });
    }
  };

export {Studentdelte}
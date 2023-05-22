import  express  from "express";

import { signupController } from "../controllers/userController.js";
import { loginController } from "../controllers/loginController.js";
import {StudentController} from "../controllers/StudentController.js";
import {studentdetail} from "../controllers/studentdetails.js"
import {Studentdelte} from "../controllers/StudentDelte.js"
import {cheakSession} from "../controllers/cheakSesssion.js"
import multer from 'multer';

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images'); // specify the destination folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); // use the original filename
  },
});

const upload = multer({ storage: storage })

var router = express.Router();

router.post("/api/user/signup", signupController); 

router.post("/api/user/login", loginController);

router.post("/api/user/studentdetails",upload.single('file'), StudentController)

router.get("/api/user/studentdetail" , studentdetail)

router.delete("/api/user/studentdetail/:id" , Studentdelte )

router.get("/api/user/cheakSession",cheakSession)

// module.exports = router ;  
export { router as userRouter }
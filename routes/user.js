import  express  from "express";
import {User} from "../models/user.js"
import { getAllUsers, userdetails , login ,logout, register,getMyProfile,updateUser,deleteUser} from "../controllers/user.js";
import { isAuthenticated } from "../middle/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login",login);
router.post("/logout",logout);

router.get("/me",isAuthenticated, getMyProfile );

// router.get("/userid/:id", userdetails);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

export default router;
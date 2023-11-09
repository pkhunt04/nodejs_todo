import { deleteMyTask, newtask, updateMyTask } from "../controllers/task.js";
import express from "express";
import { isAuthenticated } from "../middle/auth.js";

const router = express.Router();

router.post("/new",isAuthenticated,newtask)
router.get("/my",isAuthenticated,getMytask)

router.route("/:id").put(updateMyTask).delete(deleteMyTask);

export default router;
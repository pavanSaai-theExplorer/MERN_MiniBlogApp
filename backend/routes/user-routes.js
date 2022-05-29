import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller";

const router = express.Router();

router.get("/", getAllUser); // http://localhost:5000/api/user
router.post("/signup", signup); // http://localhost:5000/api/user/signup
router.post("/login", login); // http://localhost:5000/api/user/login

export default router;

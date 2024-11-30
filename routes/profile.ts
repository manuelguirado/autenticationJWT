import express, { Request, Response } from "express";
import { authToken } from "../middleware/auth";
//create a router
const router = express.Router();
//create a route for the profile
router.get("/profile", authToken, (req: Request, res: Response) => {
    //send the user
    res.json({message: "profile", user: req.user})
})
export default router
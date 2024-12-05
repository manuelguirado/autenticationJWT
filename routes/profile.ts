import express, { Request, Response } from "express";
import path from "path";
import { authToken } from "../middleware/auth";
const app = express();
app.use(express.static(path.join(__dirname, '/pages/profile.html')));
//create a router
const router = express.Router();
//create a route for the profile
router.get("/profile", authToken, (req: Request, res: Response) => {
    //send the user
    res.json({message: "profile", user: req.body.user})
})
export default router    
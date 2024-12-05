import  jwt  from 'jsonwebtoken';
import express, { Request, Response } from "express";
import path from "path";
import { authToken } from "../middleware/auth";
const app = express();
app.use(express.static(path.join(__dirname, '/pages/profile.html')));
//create a router
const router = express.Router();
//middleware to check the token
app.use((req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            "message": "Authorization header is missing"
        })
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'secret');
        req.body.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            "message": "Invalid token"
        })
    }
})
//create a route for the profile
router.get("/", authToken, (req: Request, res: Response) => {
    //send the user
    res.json({message: "welcome to the profile", user: req.body.user})
})
export default router    
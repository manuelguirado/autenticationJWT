import  jwt  from 'jsonwebtoken';
import express, { Request, Response,NextFunction } from "express";
import path from "path";
import  auth  from "../middleware/auth";
const app = express();
app.use(express.static(path.join(__dirname, '/pages/profile.html')));
//create a router
const router = express.Router();
//middleware to check the token
app.use((req : Request, res : Response, next : NextFunction)  : any => {
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
router.get("/profile",  auth , (req: Request, res: Response) => {
    //send the user
    res.sendFile(path.join(__dirname, '/pages/profile.html'));

  
})


export default router
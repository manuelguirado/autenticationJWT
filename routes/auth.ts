

//import depdencies to be used 
import express, { Request, Response } from "express";
import path from "path";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { user } from "../models/user";
const app = express();
app.use(express.static(path.join(__dirname, '/pages/login.html')));
//create a router
const router = express.Router();
//create a user
const user : user[] = [
    {
        "name" : "manudev",
        "password" : "123456"
    }
]
//route for the login 
router.post("/login",  (req : Request,res : Response) => {
    //send the data for the user 
    const { name, password } = req.body;
    //find the user
    const findUser = user.find((user) => user.name === name);
    if (!findUser) {
        return res.status(401).json({
            "message": "user not found"
        })
    }
    //check the password
    bcrypt.compare(password, findUser.password, (err, result) => {
        if ( err || !result) {
            return res.status(401).json({
                "message": "password incorrect"
            })
        }
    })
    //creat the Web Token
const token = jwt.sign({
    "name": findUser.name
}, "secret", {
    expiresIn: "2h"
})
//send the token
res.json({
    "token": token
})
})

export default router;

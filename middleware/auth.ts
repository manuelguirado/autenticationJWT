import { user } from './../models/user';
import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
//create a middleware to check if the user is authenticated
export const authToken = (req: Request, res: Response, next: NextFunction) => {
    //get the token from the header
    const token = req.header('Authorizacion')?.replace('Bearer ', '');
    //check if the token is valid
    if ( !token ) { 
        return res.status(401).json({
            "message": "no token provided"
        })
    }
    //verify the token
   jwt.verify(token, 'secret', (err, decoded) => {
        if ( err ) {
            return res.status(401).json({
                "message": "invalid token"
            })
        }
        //set the user in the request
        req.body.user = decoded;
        next();
    })
}
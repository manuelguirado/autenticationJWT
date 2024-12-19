import { user } from './../models/user';
import {Request, Response, NextFunction} from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
interface authenticatedUser extends Request {
    user?: string | JwtPayload
}
//create a middleware to check if the user is authenticated
export const auth = (req: authenticatedUser, res: Response, next: NextFunction) => {
    const  { name, password } = req.body;
    if ( !name || !password ) {
        return res.status(400).json({
            "message": "name and password are required"
        })
    }
     

    //get the token from the header
    const token = req.header('Authorization')?.replace('Bearer ', '');
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
export default auth;
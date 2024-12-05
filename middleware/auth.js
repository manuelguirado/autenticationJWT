"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//create a middleware to check if the user is authenticated
const authToken = (req, res, next) => {
    var _a;
    //get the token from the header
    const token = (_a = req.header('Authorizacion')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    //check if the token is valid
    if (!token) {
        return res.status(401).json({
            "message": "no token provided"
        });
    }
    //verify the token
    jsonwebtoken_1.default.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                "message": "invalid token"
            });
        }
        //set the user in the request
        req.body.user = decoded;
        next();
    });
};
exports.authToken = authToken;

import { NextFunction, Request, Response } from 'express';
import { IToken } from '../types';
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization;
        let tokenDecoded: IToken;

        if (!token) {
            res.status(403).json({
                error: "token is required",
            });
            return;
        }
        try {
            tokenDecoded = jwt.verify(token, process.env.SECRET_TOKEN as string) as IToken;
            req.body.token = tokenDecoded;
            return next();

        } catch (error) {
            return res.status(401).json({
                message: "Token is not valid",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "ERROR",
        });
        console.log(error);
    }
}
export default verifyToken;
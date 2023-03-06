import e, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../error";

const ensureToken = (req: Request, res: Response, next: NextFunction): void => {
    
    const token: string = req.headers.authorization!.split(' ')[1]

    if(!token){
        throw new AppError("Missing bearer Token", 401)
    }

    jwt.verify(token, String(process.env.SECRET_KEY), (error, decoded: any) => {

        if(error){
            throw new AppError(error.message, 401)
        }

        req.user = {
            id: parseInt(decoded.sub),
            admin: decoded.admin
        }

    })

    return next()
}

export default ensureToken
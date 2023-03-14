import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";



const adminPermission = (req: Request, res: Response, next: NextFunction): Response |  void => {

    const permission: boolean = req.user.admin

    const reqID: number = parseInt(req.params.id)

    const userId: number = req.user.id

    if(req.method === 'DELETE'){
        if(permission){
            return next()
        }else{
            throw new AppError("Insufficient permission", 401)
        }
    }

    
    if(!permission && reqID === userId){
        
        return next()

    }

    if(permission){

        return next()

    }
    
    throw new AppError("Insufficient permission", 401)
}

export default adminPermission
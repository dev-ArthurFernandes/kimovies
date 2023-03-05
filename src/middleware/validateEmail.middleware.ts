import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data_source";
import User from "../entities/users.entity";
import { AppError } from "../error";
import { userRepository } from "../interfaces";


const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response |  void> => {

    const userRepository: userRepository = AppDataSource.getRepository(User)

    if(req.body.email){
        const emailExist = await userRepository.exist({
            where: {
                email: req.body.email
            }
        })
        
        if(emailExist){
            throw new AppError("Email already exists", 409)
        }

        return next()
    }

    return next()
}

export default validateEmail
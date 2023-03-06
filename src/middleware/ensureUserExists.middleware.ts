import { Response, Request, NextFunction } from "express";
import { userRepository } from "../interfaces";
import { AppDataSource } from "../data_source";
import User from "../entities/users.entity";
import { AppError } from "../error";

const ensureUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository: userRepository = AppDataSource.getRepository(User)

    const userExist = await userRepository.exist({
        where: {
            id: parseInt(req.params.id)
        }
    })

    if(!userExist){
        throw new AppError("User not found", 404)
    }


    return next()
}

export default ensureUserExists
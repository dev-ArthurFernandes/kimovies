import { compare } from "bcryptjs";
import { AppDataSource } from "../../data_source";
import User from "../../entities/users.entity";
import { AppError } from "../../error";
import { userRepository } from "../../interfaces";
import { login } from "../../interfaces/login.interfaces";
import jwt from 'jsonwebtoken';



const loginService = async (payload: login): Promise<string> => {

    const userRepository: userRepository = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: payload.email
    })

    if(!user){
        throw new AppError("User not found!", 404)
    }

    const matchPass = await compare(payload.password, user.password)

    if(!matchPass){
        throw new AppError("Wrong email or password", 401)
    }

    const token: string = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )

    return token

}

export default loginService
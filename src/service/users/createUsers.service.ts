import { Repository } from "typeorm";
import { AppDataSource } from "../../data_source";
import User from "../../entities/users.entity";
import { IUserPostRequest, IUserResponse } from "../../interfaces";
import { userResponseSchema, userSchema } from "../../schema";


const createUserService = async (payload: IUserPostRequest): Promise<IUserResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.create(payload)

    await userRepository.save(user)

    const newUser = userResponseSchema.parse(user)

    return newUser

}

export default createUserService
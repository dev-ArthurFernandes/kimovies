import { AppDataSource } from "../../data_source/data_source";
import User from "../../entities/users.entity";
import { IUserResponse, IUsersList, userRepository } from "../../interfaces";
import { returnUsersArraySchema } from "../../schema";


const listUsersService =async (): Promise<IUsersList> => {
    
    const userRepository: userRepository = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find()

    const users = returnUsersArraySchema.parse(findUsers)

    return users
}

export default listUsersService
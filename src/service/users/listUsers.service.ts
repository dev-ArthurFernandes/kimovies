import { AppDataSource } from "../../data_source";
import User from "../../entities/users.entity";
import { IUserResponse, userRepository } from "../../interfaces";


const listUsersService =async (): Promise<any> => {
    
    const userRepository: userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    return users
}

export default listUsersService
import { AppDataSource } from "../../data_source";
import User from "../../entities/users.entity";
import { IUserResponse, IUsersList, userRepository } from "../../interfaces";
import { returnUsersArray } from "../../schema";


const listUsersService =async (): Promise<IUsersList> => {
    
    const userRepository: userRepository = AppDataSource.getRepository(User)

    const findUsers = await userRepository.find()

    const users = returnUsersArray.parse(findUsers)

    return users
}

export default listUsersService
import { AppDataSource } from "../../data_source"
import User from "../../entities/users.entity"
import { userRepository } from "../../interfaces"



const deleteUserService = async (userId: number): Promise<void> => {

    const userRepository: userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    await userRepository.softRemove(user!)

}

export default deleteUserService
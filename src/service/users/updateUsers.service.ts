import { defaultMaxListeners } from "events";
import { AppDataSource } from "../../data_source";
import User from "../../entities/users.entity";
import { IUserResponse, IUserUpdateRequest, userRepository } from "../../interfaces";
import { userSchema } from "../../schema";



const updateUserService = async (payload: IUserUpdateRequest, userID: number): Promise<IUserResponse> => {

    const userRespository: userRepository = AppDataSource.getRepository(User)

    const oldUser = await userRespository.findOneBy({
        id: userID
    })

    const user = userRespository.create({
        ...oldUser,
        ...payload
    })

    await userRespository.save(user)

    const updatedUser =  userSchema.parse(user)

    return updatedUser

}

export default updateUserService
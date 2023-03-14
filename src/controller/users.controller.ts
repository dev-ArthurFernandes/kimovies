import { Request, Response } from 'express';
import { 
    IUserPostRequest,
    IUserResponse,
    IUserUpdateRequest
} from '../interfaces';
import {
    listUsersService,
    createUserService,
    updateUserService
} from '../service';
import deleteUserService from '../service/users/deleteUser.service';


const createUserController = async (req: Request, res: Response): Promise<Response> => {

   const userData: IUserPostRequest = req.body
   
   const newUser: IUserResponse = await createUserService(userData)

   return res.status(201).json(newUser)

}

const listUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users = await listUsersService()

    return res.status(200).json(users)

}

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    
    const userData: IUserUpdateRequest = req.body

    const userId: number = parseInt(req.params.id)

    const updatedUser: IUserResponse = await updateUserService(userData, userId)

    return res.status(200).json(updatedUser)

}

const deleteUserController =async (req: Request, res: Response): Promise<Response> => {
    
    const userId: number = parseInt(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}

export {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController
}
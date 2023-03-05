import { Request, Response } from 'express';
import { IUserPostRequest, IUserResponse } from '../interfaces';
import { createUserService } from '../service/users';
import listUsersService from '../service/users/listUsers.service';


const createUserController = async (req: Request, res: Response): Promise<Response> => {

   const userData: IUserPostRequest = req.body
   
   const newUser: IUserResponse = await createUserService(userData)

   return res.status(201).json(newUser)

}

const listUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users = await listUsersService()

    return res.status(200).json(users)

}

export {
    createUserController,
    listUsersController
}
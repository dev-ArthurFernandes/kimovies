import { Request, Response } from 'express';
import { IUserPostRequest, IUserResponse } from '../interfaces';
import { createUserService } from '../service/users';


const createUserController = async (req: Request, res: Response): Promise<Response> => {

   const userData: IUserPostRequest = req.body
   
   const newUser: IUserResponse = await createUserService(userData)

   return res.status(201).json(newUser)

}


export {
    createUserController
}
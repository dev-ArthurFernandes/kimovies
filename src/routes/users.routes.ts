import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUsersController,
    updateUserController
} from "../controller";
import {
    ensureEntries, 
    ensureUserExists,
} from "../middleware";
import {
    createUserSchema, updateUserSchema
} from "../schema";


const userRouter: Router = Router()

userRouter.post('', ensureEntries(createUserSchema), createUserController)
userRouter.get('', listUsersController)
userRouter.patch('/:id', ensureEntries(updateUserSchema), ensureUserExists, updateUserController)   
userRouter.delete('/:id', ensureUserExists, deleteUserController)

export default userRouter
import { Router } from "express";
import {
    createUserController,
    listUsersController
} from "../controller";
import {
    ensureEntries,
    validateEmail
} from "../middleware";
import {
    createUserSchema
} from "../schema";


const userRouter: Router = Router()

userRouter.post('', validateEmail, ensureEntries(createUserSchema), createUserController)
userRouter.get('', listUsersController)
userRouter.patch('/:id',)
userRouter.delete('/:id',)

export default userRouter
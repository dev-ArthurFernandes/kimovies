import { Router } from "express";
import {
    createUserController
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
userRouter.get('',)
userRouter.patch('/:id',)
userRouter.delete('/:id',)

export default userRouter
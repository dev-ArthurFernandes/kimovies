import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUsersController,
    updateUserController
} from "../controller";
import {
    adminPermission,
    ensureEntries, 
    ensureToken, 
    ensureUserExists,
} from "../middleware";
import {
    createUserSchema, updateUserSchema
} from "../schema";


const userRouter: Router = Router()

userRouter.post('', ensureEntries(createUserSchema), createUserController)
userRouter.get('', ensureToken, adminPermission, listUsersController)
userRouter.patch('/:id', ensureUserExists, ensureToken, adminPermission, ensureEntries(updateUserSchema), updateUserController)   
userRouter.delete('/:id', ensureUserExists, ensureToken,  adminPermission, deleteUserController)

export default userRouter   
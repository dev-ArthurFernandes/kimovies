import { Router } from "express";
import { loginController } from "../controller";


const loginRouter: Router = Router()

loginRouter.post('', loginController)

export default loginRouter
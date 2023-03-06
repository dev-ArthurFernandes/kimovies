import { Request, Response } from "express";
import { loginService } from "../service/login";


const loginController =async (req: Request, res: Response): Promise<Response> => {
 
    const token: string = await loginService(req.body)

    return res.status(200).json({
        token: token
    })
}

export {
    loginController
}
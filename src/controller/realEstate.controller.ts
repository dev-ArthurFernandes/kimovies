import { Request, Response } from "express";
import { IRealEstateRequest } from "../interfaces/realEstate.interfaces";
import { createRealEstateService } from "../service";
import { listRealEstateService } from "../service/realEstate";


const createRealEstateController =async (req: Request, res: Response): Promise<Response> => {
    
    const realEstateData: IRealEstateRequest = req.body

    const newRealEstate = await createRealEstateService(realEstateData)

    return res.status(201).json(newRealEstate)
}

const listRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const realEstateArray = await listRealEstateService()

    return res.status(200).json(realEstateArray)
}


export {
    createRealEstateController,
    listRealEstateController
}
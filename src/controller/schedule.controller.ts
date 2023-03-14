import { Request, Response } from "express";
import { createScheduleService } from "../service";
import { listScheduleService } from "../service/schedule";



const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const scheduleData = req.body

    const newSchedule = await createScheduleService(scheduleData)

    return res.status(201).json(newSchedule)
}

const listScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const scheludes = await listScheduleService(parseInt(req.params.id))

    return res.status(200).json(scheludes)
}

export {
    createScheduleController,
    listScheduleController
}
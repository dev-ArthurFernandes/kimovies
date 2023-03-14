import { Router } from "express";
import { createScheduleController, listScheduleController } from "../controller/schedule.controller";
import { ensureEntries, ensureToken } from "../middleware";
import { createScheduleSchema } from "../schema";



const schedulesRouter: Router = Router()

schedulesRouter.post('', ensureToken, ensureEntries(createScheduleSchema), createScheduleController)
schedulesRouter.get('/realEstate/:id', ensureToken, listScheduleController)

export default schedulesRouter
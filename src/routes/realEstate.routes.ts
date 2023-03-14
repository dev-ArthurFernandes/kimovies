import { Router } from "express";

import {
    createRealEstateController,
    listRealEstateController
} from '../controller'

import {
    ensureEntries,
    ensureToken,
} from '../middleware'

import {
    createRealEstateSchema,
} from '../schema'

const realEstateRouter: Router = Router()

realEstateRouter.post('', ensureToken, ensureEntries(createRealEstateSchema), createRealEstateController)
realEstateRouter.get('', listRealEstateController)

export default realEstateRouter
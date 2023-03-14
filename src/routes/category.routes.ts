import { Router } from "express";
import { createCategoryController, listCategoriesController, listCategoryRealEstateControlller } from "../controller";
import { adminPermission, ensureEntries, ensureToken } from "../middleware";
import { createCategorySchema } from "../schema";

const categoryRouter: Router = Router()

categoryRouter.post('', ensureToken, adminPermission, ensureEntries(createCategorySchema), createCategoryController)
categoryRouter.get('', listCategoriesController)
categoryRouter.get('/:id/realEstate', listCategoryRealEstateControlller)


export default categoryRouter
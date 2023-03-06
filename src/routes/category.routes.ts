import { Router } from "express";
import { createCategoryController, listCategoriesController, listCategoryControlller } from "../controller";
import { adminPermission, ensureEntries, ensureToken } from "../middleware";
import { categoryRequest } from "../schema";

const categoryRouter: Router = Router()

categoryRouter.post('', ensureToken, adminPermission, ensureEntries(categoryRequest), createCategoryController)
categoryRouter.get('', listCategoriesController)
categoryRouter.get('/:id/realEstate', listCategoryControlller)


export default categoryRouter
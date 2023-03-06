import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { ICategoryRequest, IReturnCategory } from "../interfaces";
import { createCategoryService } from "../service";
import { listCategoriesService } from "../service/categories";
import listCategoryService from "../service/categories/listCategory.service";



const createCategoryController = async (req: Request, res: Response ): Promise<Response> => {

    const categoryData: ICategoryRequest = req.body

    const newCategory: IReturnCategory = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response ): Promise<Response> => {

    const categoriesArray = await listCategoriesService()

    return res.status(200).json(categoriesArray)
}

const listCategoryControlller = async (req: Request, res: Response): Promise<Response> => {

    const categoryId: number = parseInt(req.params.id)

    const category = await listCategoryService(categoryId)

    return res.status(200).json(category)
}


export {
    createCategoryController,
    listCategoriesController,
    listCategoryControlller
}
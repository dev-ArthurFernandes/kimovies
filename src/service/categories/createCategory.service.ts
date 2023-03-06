import { AppDataSource } from "../../data_source";
import Category from "../../entities/categories.entity";
import { categoryRepository, ICategoryRequest, IReturnCategory } from "../../interfaces";
import { categoryResponse } from "../../schema";



const createCategoryService = async (payload: ICategoryRequest ): Promise<IReturnCategory> => {

    const categoryRepository: categoryRepository = AppDataSource.getRepository(Category)

    const newCategory = categoryRepository.create(payload)

    await categoryRepository.save(newCategory)

    return categoryResponse.parse(newCategory)

}

export default createCategoryService
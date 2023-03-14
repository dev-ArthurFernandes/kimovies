import { AppDataSource } from "../../data_source/data_source";
import Category from "../../entities/categories.entity";
import { categoryRepository, ICategoryRequest, IReturnCategory } from "../../interfaces";
import { categorySchema } from "../../schema";



const createCategoryService = async (payload: ICategoryRequest ): Promise<IReturnCategory> => {

    const categoryRepository: categoryRepository = AppDataSource.getRepository(Category)

    const newCategory = categoryRepository.create(payload)

    await categoryRepository.save(newCategory)

    return categorySchema.parse(newCategory)

}

export default createCategoryService
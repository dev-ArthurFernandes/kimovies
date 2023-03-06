import { AppDataSource } from "../../data_source";
import Category from "../../entities/categories.entity";
import { AppError } from "../../error";
import { categoryRepository, IReturnCategory } from "../../interfaces";
import { categoryResponse } from "../../schema";



const listCategoryService =async (categoryId: number): Promise<IReturnCategory> => {

    const categoryRepository: categoryRepository = AppDataSource.getRepository(Category)

    const findCategory = await categoryRepository.findOneBy({
        id: categoryId
    })

    if(!findCategory){
        throw new AppError("Category not found!", 404)
    }

    return categoryResponse.parse(findCategory)

}

export default listCategoryService
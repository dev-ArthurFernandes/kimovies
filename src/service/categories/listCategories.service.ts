import { AppDataSource } from "../../data_source/data_source";
import Category from "../../entities/categories.entity";
import { categoryRepository, ICategoriesArray } from "../../interfaces";
import { returnCategoriesArraySchema } from "../../schema";



const listCategoriesService =async (): Promise<ICategoriesArray> => {
    
    const categoryRepository: categoryRepository = AppDataSource.getRepository(Category)

    const findCategories =  await categoryRepository.find()

    return returnCategoriesArraySchema.parse(findCategories)

}

export default listCategoriesService
import { AppDataSource } from "../../data_source/data_source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";
import { categoryRepository, IReturnCategory, realEstateRepository } from "../../interfaces";
import { categorySchema } from "../../schema";



const listCategoryService =async (categoryId: number): Promise<IReturnCategory> => {

    const realEstateRepository: realEstateRepository = AppDataSource.getRepository(RealEstate)

    const realEstate = realEstateRepository.find({
        relations: {
            category: true,
            addresses: true
        },
        where: {
            category: {
                id: categoryId
            }
        }
    })

    if(!realEstate){
        throw new AppError("Category not found!", 404)
    }

    return realEstate

}

export default listCategoryService
import { AppDataSource } from "../../data_source";
import RealEstate from "../../entities/realEstate.entity";
import { realEstateRepository } from "../../interfaces";
import { IRealEstate, IRealEstateArrayReturn } from "../../interfaces/realEstate.interfaces";



const listRealEstateService =async (): Promise<any> => {
    
    const realEstateRepository: realEstateRepository = AppDataSource.getRepository(RealEstate)

    const findRealEstate = await realEstateRepository.find({
        relations: {
            addresses: true,
            category: true
        }
    })

    return findRealEstate
}

export default listRealEstateService
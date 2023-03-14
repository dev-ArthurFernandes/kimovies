import { AppDataSource } from "../../data_source/data_source";
import Address from "../../entities/adresses.entity";
import Category from "../../entities/categories.entity";
import RealEstate from "../../entities/realEstate.entity";
import { AppError } from "../../error";
import { addressesRepository, categoryRepository, realEstateRepository } from "../../interfaces";
import { IRealEstate, IRealEstateRequest } from "../../interfaces/realEstate.interfaces";
import { createAdressesSchema } from "../../schema";
import { realEstateSchema } from "../../schema/realEstate.schema";



const createRealEstateService = async (payload: IRealEstateRequest): Promise<IRealEstate> => {

    const realEstateRepository: realEstateRepository = AppDataSource.getRepository(RealEstate)

    const categoryRepository: categoryRepository = AppDataSource.getRepository(Category)

    const adressesRepository: addressesRepository = AppDataSource.getRepository(Address)

    const adressesExists = await adressesRepository.exist({
        where: {
            street: payload.adresses.street,
            state: payload.adresses.state,
            city: payload.adresses.city,
            number: payload.adresses.number || '',
            zipCode: payload.adresses.zipCode
        }
    })

    if(adressesExists){
        throw new AppError("Adresses already existis", 409)
    }

    const category = await categoryRepository.findOneBy({
        id: payload.categoryId
    })

    payload.adresses.number = payload.adresses.number || ''

    const newAdresses = adressesRepository.create(payload.adresses)

    await adressesRepository.save(newAdresses)

    const realEstate = realEstateRepository.create({
        ...payload,
        addresses: newAdresses,
        category
    })

    const newRealEstate = await realEstateRepository.save(realEstate)

    console.log(newRealEstate)

    return realEstateSchema.parse(newRealEstate)
}

export default createRealEstateService
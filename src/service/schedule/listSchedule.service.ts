import { AppDataSource } from "../../data_source/data_source";
import { Schedule } from "../../entities";
import { scheduleRepository } from "../../interfaces";
import { ISchedule, IScheduleArray } from "../../interfaces";



const listScheduleService = async (realEstateId: number): Promise<any> => {

    const scheduleRepository: scheduleRepository = AppDataSource.getRepository(Schedule)

    const findSchedule = await scheduleRepository.find({
        relations: {
            realEstate: true,
            user: true
        },
        where: {
            realEstate: {
                id: realEstateId
            }
        }
    })

    return findSchedule
}

export default listScheduleService
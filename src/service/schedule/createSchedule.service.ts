import { AppDataSource } from "../../data_source";
import { RealEstate, Schedule, User } from "../../entities";
import { realEstateRepository, scheduleRepository, userRepository } from "../../interfaces";
import { ICreateSchedule, ISchedule } from "../../interfaces/schedules.interfaces";
import { scheduleSchema } from "../../schema";



const createScheduleService = async (payload: ICreateSchedule): Promise<ISchedule> => {

    const schedulesRepository: scheduleRepository = AppDataSource.getRepository(Schedule)

    const userRepository: userRepository = AppDataSource.getRepository(User)

    const realEstateRepository: realEstateRepository = AppDataSource.getRepository(RealEstate)

    const user = await userRepository.findOneBy({
        id: payload.userId
    })

    const realEstate = await realEstateRepository.findOneBy({
        id: payload.realEstateId
    })

    const newSchedule = schedulesRepository.create({
        ...payload,
        user: user!,
        realEstate: realEstate!
    })

    await schedulesRepository.save(newSchedule)

    return scheduleSchema.parse(newSchedule)
}

export default createScheduleService
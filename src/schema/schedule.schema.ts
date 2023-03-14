import { number, z } from 'zod';
import { realEstateSchema } from './realEstate.schema';
import { userSchema } from './users.schemas';


const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
    userId: z.number()
})

const scheduleSchema = createScheduleSchema.extend({
    id: z.number(),
    user: userSchema,
    realEstate: realEstateSchema
}).omit({realEstateId: true, userId: true})

const scheduleResponsiArray = scheduleSchema.array()

export {
    createScheduleSchema,
    scheduleSchema,
    scheduleResponsiArray
}
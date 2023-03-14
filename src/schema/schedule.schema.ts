import { number, z } from 'zod';


const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number(),
    userId: z.number()
})

const scheduleSchema = createScheduleSchema.extend({
    id: z.number(),
})

const scheduleResponsiArray = scheduleSchema.array()

export {
    createScheduleSchema,
    scheduleSchema,
    scheduleResponsiArray
}
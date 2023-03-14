import { z } from 'zod';
import { createScheduleSchema, scheduleSchema } from '../schema';
import { scheduleResponsiArray } from '../schema/schedule.schema';

type ICreateSchedule = z.infer<typeof createScheduleSchema>
type ISchedule = z.infer<typeof scheduleSchema>
type IScheduleArray = z.infer<typeof scheduleResponsiArray>

export {
    ICreateSchedule,
    ISchedule,
    IScheduleArray
}
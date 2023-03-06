import { z } from 'zod';
import { hashSync } from 'bcryptjs';

const createUserSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().max(120).transform((pass) => {
        return hashSync(pass, 10)
    }),
    admin: z.boolean().optional().default(false)
})

const updateUserSchema = createUserSchema.partial().omit({ admin: true})

const userSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true})


const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().max(120)
})

const returnUsersArray = userSchema.array()

export {
    createUserSchema,
    updateUserSchema,
    userSchema,
    userLoginSchema,
    returnUsersArray
}
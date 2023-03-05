import { z } from 'zod';
import { hashSync } from 'bcryptjs';

const createUserSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    password: z.string().max(120).transform((pass) => {
        return hashSync(pass, 120)
    }),
    admin: z.boolean().default(false).optional().default(false)
})

const updateUserSchema = z.object({
    name: z.string().min(3).max(45).optional(),
    email: z.string().email().max(45).optional(),
    password: z.string().max(120).transform((pass) => {
        return hashSync(pass, 120)
    }).optional()
})

const userSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date()
})

const userResponseSchema = userSchema.omit({password: true})

const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().max(120)
})

export {
    createUserSchema,
    updateUserSchema,
    userSchema,
    userLoginSchema,
    userResponseSchema
}
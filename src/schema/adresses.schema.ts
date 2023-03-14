import { number, z } from 'zod';


const createAdressesSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(6).optional(),
    city: z.string().max(20),
    state: z.string().max(2)
})

const adressesSchema = createAdressesSchema.extend({
    id: number()
})

const adressesListSchema = adressesSchema.array()

export {
    createAdressesSchema,
    adressesSchema,
    adressesListSchema
}
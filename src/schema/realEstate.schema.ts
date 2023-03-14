import { z } from 'zod';
import { createAdressesSchema } from './adresses.schema';


const createRealEstateSchema = z.object({
    value: z.number(),
    size: z.number(),
    categoryId: z.number(),
    adresses: createAdressesSchema
})

const realEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    createAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string(),
    addressId: z.number()
}).omit({adresses: true})

const realEstateArray = realEstateSchema.array()

export {
    createRealEstateSchema,
    realEstateSchema,
    realEstateArray
}
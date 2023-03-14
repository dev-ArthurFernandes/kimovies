import { z } from 'zod';
import { createAdressesSchema } from './adresses.schema';
import { categorySchema } from './categories.schema';


const createRealEstateSchema = z.object({
    value: z.string(),
    size: z.number(),
    categoryId: z.number(),
    adresses: createAdressesSchema
})

const realEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date(),
    category: categorySchema
}).omit({adresses: true, categoryId: true})

const realEstateArray = realEstateSchema.array()

export {
    createRealEstateSchema,
    realEstateSchema,
    realEstateArray
}
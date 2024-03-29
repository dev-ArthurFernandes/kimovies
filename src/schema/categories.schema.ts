import { z } from 'zod';


const createCategorySchema = z.object({
    name: z.string().max(45)
})

const categorySchema = createCategorySchema.extend({
    id: z.number()
})

const returnCategoriesArraySchema = categorySchema.array()

export {
    createCategorySchema,
    categorySchema,
    returnCategoriesArraySchema
}
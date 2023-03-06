import { z } from 'zod';


const categoryRequest = z.object({
    name: z.string().max(45)
})

const categoryResponse = categoryRequest.extend({
    id: z.number()
})

const returnCategoriesArray = categoryResponse.array()

export {
    categoryRequest,
    categoryResponse,
    returnCategoriesArray
}
import { z } from "zod";
import {
    categoryRequest,
    categoryResponse,
    returnCategoriesArray
} from "../schema";


type ICategoryRequest = z.infer<typeof categoryRequest>
type IReturnCategory = z.infer<typeof categoryResponse>
type ICategoriesArray = z.infer<typeof returnCategoriesArray>

export {
    ICategoryRequest,
    IReturnCategory,
    ICategoriesArray
}
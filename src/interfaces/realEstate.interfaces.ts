import { z } from 'zod';
import { createRealEstateSchema, realEstateArray, realEstateSchema } from '../schema/realEstate.schema';

type IRealEstateRequest = z.infer<typeof createRealEstateSchema>
type IRealEstate = z.infer<typeof realEstateSchema>
type IRealEstateArrayReturn = z.infer<typeof realEstateArray>

export {
    IRealEstateRequest,
    IRealEstate,
    IRealEstateArrayReturn
}
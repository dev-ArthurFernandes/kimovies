import { z } from 'zod';
import { adressesListSchema, adressesSchema, createAdressesSchema } from '../schema';

type IAdresses = z.infer<typeof adressesSchema>
type IAdressesRequest = z.infer<typeof createAdressesSchema>
type IAdressesArray = z.infer<typeof adressesListSchema>


export {
    IAdresses,
    IAdressesArray,
    IAdressesRequest
}
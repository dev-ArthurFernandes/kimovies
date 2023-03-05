import { Repository } from 'typeorm';
import { z } from 'zod'
import Address from '../entities/adresses.entity';
import Category from '../entities/categories.entity';
import realEstate from '../entities/realEstate.entity';
import SchemduleUsersProperties from '../entities/schemduleUserPropite.entity';
import User from '../entities/users.entity';
import {
    createUserSchema,
    updateUserSchema,
    userLoginSchema,
    userSchema,
    userResponseSchema
} from "../schema";

type IUserResponse = z.infer<typeof userResponseSchema>
type IUserPostRequest = z.infer<typeof createUserSchema>
type IUserUpdateRequest = z.infer<typeof updateUserSchema>

type ILoginRequest = z.infer<typeof userLoginSchema>

type userRepository = Repository<User>
type scheduleRepository = Repository<SchemduleUsersProperties>
type realEstateRepository = Repository<realEstate>
type categoryRepository = Repository<Category>
type addressesRepository = Repository<Address>

export {
    IUserPostRequest,
    IUserUpdateRequest,
    IUserResponse,
    ILoginRequest,
    userRepository,
    scheduleRepository,
    realEstateRepository,
    categoryRepository,
    addressesRepository
}
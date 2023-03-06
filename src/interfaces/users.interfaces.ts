import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod'
import Address from '../entities/adresses.entity';
import Category from '../entities/categories.entity';
import realEstate from '../entities/realEstate.entity';
import SchemduleUsersProperties from '../entities/schemduleUserPropite.entity';
import User from '../entities/users.entity';
import {
    createUserSchema,
    returnUsersArray,
    updateUserSchema,
    userLoginSchema,
    userSchema
} from "../schema";

type IUserResponse = z.infer<typeof userSchema>
type IUserPostRequest = z.infer<typeof createUserSchema>
type IUserUpdateRequest = DeepPartial<IUserPostRequest>

type IUsersList = z.infer<typeof returnUsersArray>

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
    addressesRepository,
    IUsersList
}
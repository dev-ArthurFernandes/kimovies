import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne
} from 'typeorm'
import { string } from 'zod'
import realEstate from './realEstate.entity'


@Entity("addresses")
class Address{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45})
    street: string

    @Column({ length: 8})
    zipCode: string

    @Column({type: 'varchar', length: 6, nullable: true})
    number: string | null | undefined

    @Column({ length: 20})
    city: string

    @Column({ length: 2})
    state: string

    @OneToOne(() => realEstate, realEstate => realEstate.addresses)
    addresses: Address
}

export default Address
import { getRounds, hashSync } from 'bcryptjs'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm'
import realEstate from './realEstate.entity'


@Entity("addresses")
class Address{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45})
    street: string

    @Column({ length: 8})
    zipCode: string

    @Column({ length: 6, nullable: true})
    number: string

    @Column({ length: 20})
    city: string

    @Column({ length: 2})
    state: string

    @OneToOne(() => realEstate, realEstate => realEstate.addresses)
    addresses: Address
}

export default Address
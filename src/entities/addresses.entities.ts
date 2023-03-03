import { getRounds, hashSync } from 'bcryptjs';
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
    BeforeUpdate,
} from 'typeorm'


@Entity('addresses')
class Addres{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45})
    street: string

    @Column({ length: 8})
    zipCode: string

    @Column({ length: 6, nullable: true})
    number: string | null | undefined

    @Column({ length: 20})
    city: string

    @Column({ length: 2})
    state: string
}

export default Addres

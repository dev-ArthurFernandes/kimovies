
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
import {SchedulesUsersProperties} from './index';

@Entity('usesrs')
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45})
    name: string

    @Column({ length: 45})
    email: string

    @Column({ default: false})
    admin: boolean

    @Column({ length: 120})
    password: string

    @Column({ type: 'date'})
    createdAt: Date

    @Column({ type: 'date'})
    updatedAt: Date

    @Column({ type: 'date'})
    deletedAt: Date

    @OneToMany(() => SchedulesUsersProperties, SchedulesUsersProperties => SchedulesUsersProperties.user)
    @JoinColumn()
    user: number
}


export default User
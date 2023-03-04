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
    BeforeUpdate,
    ManyToOne,
    ManyToMany
} from 'typeorm'
import realEstate from './realEstate.entity'
import User from './users.entity'

@Entity('schemdule_users_properties')
class SchemduleUsersProperties{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "date"})
    date: Date

    @Column({ type: "time"})
    hour: string

    @ManyToOne(() => User, User => User.id)
    @JoinColumn()
    user: User

    @OneToOne(() => realEstate, (realEstate) => realEstate.id)
    @JoinColumn()
    realEstate: realEstate
}

export default SchemduleUsersProperties
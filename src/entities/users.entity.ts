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
    ManyToMany
} from 'typeorm'
import realEstate from './realEstate.entity'
import SchemduleUsersProperties from './schemduleUserPropite.entity'

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45})
    name: string

    @Column({ length: 45, unique: true})
    email: string

    @Column({ default: false})
    admin: boolean

    @Column({ length: 120})
    password: string

    @CreateDateColumn({ type: 'date'})
    createdAt: string

    @UpdateDateColumn({ type: 'date'})
    updatedAt: string

    @DeleteDateColumn({ type: 'date'})
    deletedAt: string

    @OneToMany(() => SchemduleUsersProperties, SchemduleUsersProperties => SchemduleUsersProperties.user)
    user: User
}


export default User
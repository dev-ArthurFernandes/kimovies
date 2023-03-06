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

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @OneToMany(() => SchemduleUsersProperties, SchemduleUsersProperties => SchemduleUsersProperties.user)
    user: User

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const encrypted = getRounds(this.password)
        if(!encrypted){
            this.password = hashSync(this.password, 10)
        }
    }
}


export default User
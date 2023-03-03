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

@Entity('categories')
class Category{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45, unique: true})
    name: string

}

export default Category
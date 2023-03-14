import { getRounds, hashSync } from 'bcryptjs'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm'
import realEstate from './realEstate.entity'


@Entity("categories")
class Category{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 45, unique: true})
    name: string
    
    @OneToMany(() => realEstate, realEstate => realEstate.category, {nullable: true})
    category: Category | null

}

export default Category
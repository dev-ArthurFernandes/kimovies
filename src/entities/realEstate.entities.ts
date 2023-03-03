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

@Entity('real_estate')
class RealEstate{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'boolean', default: false})
    sold: boolean

    @Column({ type: "decimal"})
    value: number

    @Column({ type: "integer"})
    size: number

    @Column({ type: "date"})
    createdAt: Date

    @Column({ type: "date"})
    updatedAt: Date

}

export default RealEstate
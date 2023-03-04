import { getRounds, hashSync } from 'bcryptjs'
import { DEFAULT_ECDH_CURVE } from 'tls'
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
    ManyToMany,
    ManyToOne
} from 'typeorm'
import Address from './adresses.entity'
import Category from './categories.entity'
import SchemduleUsersProperties from './schemduleUserPropite.entity'


@Entity("real_estate")
class realEstate{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "boolean", default: false})
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2})
    value: number

    @Column({ type: "integer"})
    size: number

    @CreateDateColumn({ type: "date"})
    createdAt: string

    @UpdateDateColumn({ type: "date"})
    updatedAt: string

    @OneToOne(() => SchemduleUsersProperties, (SchemduleUsersProperties) => SchemduleUsersProperties.realEstate)
    realEstate: realEstate

    @OneToOne(() => Address, Address => Address.id)
    @JoinColumn()
    addresses: Address

    @ManyToOne(() => Category, Category => Category.id)
    category: Category

}

export default realEstate
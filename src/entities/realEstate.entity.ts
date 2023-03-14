import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    BeforeUpdate,
    AfterUpdate,
    BeforeInsert
} from 'typeorm'
import Address from './adresses.entity'
import Category from './categories.entity'
import SchemduleUsersProperties from './schemduleUserPropite.entity'


@Entity("real_estate")
class RealEstate{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "boolean", default: false})
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2})
    value: string

    @Column({ type: "integer"})
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(() => SchemduleUsersProperties, (SchemduleUsersProperties) => SchemduleUsersProperties.realEstate)
    realEstate: RealEstate

    @OneToOne(() => Address, Address => Address.id)
    @JoinColumn()
    addresses: Address

    @ManyToOne(() => Category, Category => Category.id, { nullable: true})
    category?: Category | null | undefined

}

export default RealEstate
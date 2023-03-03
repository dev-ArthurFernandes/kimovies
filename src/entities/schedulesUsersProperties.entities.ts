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

@Entity('schedules_users_properties')
class SchedulesUsersProperties{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "date"})
    date: Date

    @Column({ type: "time"})
    hour: TimeRanges

}

export default SchedulesUsersProperties
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './users.entity';
import { Activity } from '../../activities/activities.entity';

@Entity()
export class Email {
	@PrimaryGeneratedColumn("increment")
	useemail_id: number

	@Column("timestamptz")
	sent_at: Date

	@ManyToOne(() => User, (user) => user.subscriptions)
	@JoinColumn({ name: "user_id", referencedColumnName: "user_id"})
    user: User

	@ManyToOne(() => Activity, (activity) => activity.emails)
	@JoinColumn({ name: "activity_id", referencedColumnName: "activity_id"})
    activity: User
}
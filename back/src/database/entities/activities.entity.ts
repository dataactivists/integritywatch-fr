import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Lobbyist } from './lobbyists.entity';
import { Email } from './emails.entity';

export enum ActivityType {
	TEST = "TEST"
}

@Entity()
export class Activity {
	@PrimaryGeneratedColumn("increment")
	activity_id: number;

	@ManyToOne(() => Lobbyist, (lobbyist) => lobbyist.activities)
	@JoinColumn({ name: "lobbyist_id", referencedColumnName: "lobbyist_id"})
    lobbyist: Lobbyist
	
	@Column("enum", {
		enum: ActivityType,
		default: ActivityType.TEST
	})
	activity_type: ActivityType

	@Column("text")
	description: string

	@Column("timestamptz")
	created_at: Date

	@OneToMany(() => Email, (email) => email.activity)
	emails: Email[]
}
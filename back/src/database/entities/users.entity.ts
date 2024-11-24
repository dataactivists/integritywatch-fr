import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Lobbyist } from './lobbyists.entity';
import { Subscription } from './subscriptions.entity';
import { Email } from './emails.entity';

@Entity()
export class User	 {
	@PrimaryGeneratedColumn("increment")
	user_id: number;

	@Column("varchar", {
		length: 255
	})
	email: string

	@Column("timestamptz")
	created_at: Date

	@OneToMany(() => Subscription, (subscription) => subscription.user)
	subscriptions: Subscription[]

	@OneToMany(() => Email, (email) => email.user)
	emails: Subscription[]
}
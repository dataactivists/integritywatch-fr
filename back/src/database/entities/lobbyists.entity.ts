import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Activity } from './activities.entity';
import { Subscription } from './subscriptions.entity';

@Entity()
export class Lobbyist {
	@PrimaryGeneratedColumn("increment")
	lobbyist_id: number;
	
	@Column("varchar", {
		length: 255,
		nullable: false
	})
	name: string;

	@OneToMany(() => Activity, (activity) => activity.lobbyist)
	activities: Activity[]

	@OneToMany(() => Subscription, (subscription) => subscription.lobbyist)
	subscriptions: Subscription[]
}
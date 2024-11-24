import { Activity } from 'src/activities/activities.entity';
import { Subscription } from 'src/subscriptions/subscriptions.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
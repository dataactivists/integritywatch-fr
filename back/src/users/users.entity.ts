import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Subscription } from "../subscriptions/subscriptions.entity";
import { Email } from "src/emails/emails.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")
    user_id: number;

    @Column("varchar", {
        length: 255,
    })
    email: string;

    @Column("datetime")
    created_at: Date;

    @OneToMany(() => Subscription, (subscription) => subscription.user)
    subscriptions: Subscription[];

    @OneToMany(() => Email, (email) => email.user)
    emails: Subscription[];
}

import { Activity } from "src/activities/activities.entity";
import { User } from "src/users/users.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

@Entity()
export class Email {
    @PrimaryGeneratedColumn("increment")
    useemail_id: number;

    @Column("datetime")
    sent_at: Date;

    @ManyToOne(() => User, (user) => user.subscriptions, {nullable: false})
    @JoinColumn({ name: "user_id", referencedColumnName: "user_id" })
    user: User;

    @ManyToOne(() => Activity, (activity) => activity.emails, {nullable: false})
    @JoinColumn({ name: "activity_id", referencedColumnName: "activity_id" })
    activity: User;
}

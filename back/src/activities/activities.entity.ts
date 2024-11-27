import { Email } from "src/emails/emails.entity";
import { Lobbyist } from "src/lobbyists/lobbyists.entity";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";

export enum ActivityType {
    TEST = "TEST",
}

@Entity()
export class Activity {
    @PrimaryGeneratedColumn("increment")
    activity_id: number;

    @ManyToOne(() => Lobbyist, (lobbyist) => lobbyist.activities, {nullable: false})
    @JoinColumn({ name: "lobbyist_id", referencedColumnName: "lobbyist_id" })
    lobbyist: Lobbyist;

    @Column("enum", {
        enum: ActivityType,
        default: ActivityType.TEST,
    })
    activity_type: ActivityType;

    @Column("text")
    description: string;

    @Column("datetime")
    created_at: Date;

    @OneToMany(() => Email, (email) => email.activity)
    emails: Email[];
}

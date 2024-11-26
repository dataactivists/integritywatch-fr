import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/users.entity';
import { Lobbyist } from 'src/lobbyists/lobbyists.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn('increment')
  subscription_id: number;

  @ManyToOne(() => Lobbyist, (lobbyist) => lobbyist.subscriptions)
  @JoinColumn({ name: 'lobbyist_id', referencedColumnName: 'lobbyist_id' })
  lobbyist: Lobbyist;

  @ManyToOne(() => User, (user) => user.subscriptions)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user: User;

  @Column('datetime', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
}

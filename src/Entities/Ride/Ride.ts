import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import KickBoard from '../kickBoard/KickBoard';
import Users from '../user/User';

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'boolean', default: false })
  isRiding: boolean;

  @Column()
  userId: number;

  @ManyToOne((type) => Users, (user) => user.ride)
  user: Users[];

  @Column()
  kickboardId: number;

  @ManyToOne((type) => KickBoard, (kickboard) => kickboard.ride)
  kickboard: KickBoard[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Ride;

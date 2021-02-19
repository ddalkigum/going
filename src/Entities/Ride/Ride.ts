import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import KickBoard from "../KickBoard/KickBoard";
import Users from "../User/User";

@Entity()
class Ride extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Users, (user) => user.ride)
  user: Users[];

  @ManyToOne(() => KickBoard, (kickboard) => kickboard.ride)
  kickboard: KickBoard[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default Ride;

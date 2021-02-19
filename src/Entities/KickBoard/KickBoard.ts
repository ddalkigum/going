import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Ride from "../Ride/Ride";
import Users from "../User/User";

@Entity()
class KickBoard extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "varchar", length: 30 })
  name: string;

  @Column({ type: "int", default: 100 })
  battery: number;

  @Column({ type: "int", default: 100 })
  remaingTime: number;

  @Column({ type: "double precision", default: 0 })
  latitude: number;

  @Column({ type: "double precision", default: 0 })
  longitude: number;

  @Column({ type: "double precision", default: 0 })
  lastLatitude: number;

  @Column({ type: "double precision", default: 0 })
  lastLongitude: number;

  @Column({ type: "int" })
  price: number;

  @Column({ type: "int" })
  basicPrice: number;

  @Column({ type: "int", default: 0 })
  basicTime: number;

  @Column({ type: "boolean", default: false })
  isExisting: boolean;

  @OneToMany(() => Ride, (ride) => ride.kickboard)
  ride: KickBoard;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default KickBoard;

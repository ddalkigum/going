import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import KickBoard from "../KickBoard/KickBoard";
import Ride from "../Ride/Ride";

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: "varchar", length: 45, nullable: true })
  name: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  email: string;

  @Column({ type: "text", nullable: true })
  image: string;

  @Column({ type: "char", length: 15, nullable: true })
  phoneNumber: string;

  @Column({ type: "char", length: 3, nullable: true })
  gender: string;

  @Column({ type: "date", nullable: true })
  birthDay: string;

  @Column({ type: "char", length: 20, nullable: true })
  invite_code: string;

  @Column({ type: "double precision", default: 0 })
  latitude: number;

  @Column({ type: "double precision", default: 0 })
  longitude: number;

  @Column({ type: "int", nullable: true })
  orientation: number;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  @OneToMany(() => Ride, (ride) => ride.user)
  ride: KickBoard;

  @BeforeInsert()
  createInviteCode(): void {
    this.invite_code = Math.random().toString(36).substr(2);
  }
}

export default Users;

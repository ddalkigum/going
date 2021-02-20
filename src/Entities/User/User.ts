import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import UserCoupon from '../coupon/UserCoupon';

import Ride from '../ride/Ride';

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 45, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'char', length: 15, nullable: true })
  phoneNumber: string;

  @Column({ type: 'char', length: 3, nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  birthDay: string;

  @Column({ type: 'char', length: 20, nullable: true })
  invite_code: string;

  @Column({ type: 'double precision', default: 0 })
  latitude: number;

  @Column({ type: 'double precision', default: 0 })
  longitude: number;

  @Column({ type: 'int', nullable: true })
  orientation: number;

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;

  @OneToMany((type) => Ride, (ride) => ride.user)
  ride: Ride[];

  @OneToMany((type) => UserCoupon, (userCoupon) => userCoupon.user)
  userCoupon: UserCoupon;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createInviteCode(): void {
    this.invite_code = Math.random().toString(36).substr(2);
  }
}

export default Users;

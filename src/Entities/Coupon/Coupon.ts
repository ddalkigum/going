import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import moment from 'moment';
import UserCoupon from './UserCoupon';

@Entity()
class Coupon extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 20 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  discount_price: string;

  @Column({ type: 'datetime' })
  startDay: string;

  @Column({ type: 'datetime' })
  endDay: string;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @OneToMany((type) => UserCoupon, (userCoupon) => userCoupon.coupon)
  userCoupon: UserCoupon;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createEndDay(): void {
    this.endDay = moment(this.startDay).add(7, 'd').format('YYYY-MM-DD');
  }
}

export default Coupon;

import { BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Users from '../user/User';
import Coupon from './Coupon';

@Entity()
class UserCoupon extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne((type) => Users, (user) => user.userCoupon)
  user: Users[];

  @ManyToOne((type) => Coupon, (coupon) => coupon.userCoupon)
  coupon: Coupon[];
}

export default UserCoupon;

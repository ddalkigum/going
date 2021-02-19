import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import moment from "moment";

@Entity()
class Coupon extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: "varchar", length: 20 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  discount_price: string;

  @Column({ type: "datetime" })
  startDay: string;

  @Column({ type: "datetime" })
  endDay: string;

  @Column({ type: "varchar", length: 100 })
  description: string;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createEndDay(): void {
    this.endDay = moment(this.startDay).add(7, "d").format("YYYY-MM-DD");
  }
}

export default Coupon;

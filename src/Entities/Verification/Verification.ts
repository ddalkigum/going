import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 100 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 100 })
  key: string;

  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createKey(): void {
    this.key = (Math.floor(Math.random() * 9500) + 50000).toString();
  }
}

export default Verification;

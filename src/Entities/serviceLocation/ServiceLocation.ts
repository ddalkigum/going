import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import KickBoard from '../kickBoard/KickBoard';

@Entity()
class ServiceLocation extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany((type) => KickBoard, (kickboard) => kickboard.serviceLocation)
  kickboard: KickBoard[];

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default ServiceLocation;

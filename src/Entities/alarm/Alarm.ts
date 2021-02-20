import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import KickBoard from '../kickBoard/KickBoard';

@Entity()
class Alarm extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'text' })
  alarm: string;

  @OneToMany((type) => KickBoard, (kickboard) => kickboard.alarm)
  kickboard: KickBoard[];
}

export default Alarm;

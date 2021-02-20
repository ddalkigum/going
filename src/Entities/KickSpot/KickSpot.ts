import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class KickSpot extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'text' })
  icon_image: string;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;
}

export default KickSpot;

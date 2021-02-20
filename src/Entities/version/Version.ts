import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Version extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar' })
  versionNumber: string;
}

export default Version;

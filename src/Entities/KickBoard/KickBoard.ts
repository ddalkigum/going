import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Alarm from '../alarm/Alarm';
import Ride from '../ride/Ride';
import ServiceLocation from '../serviceLocation/ServiceLocation';

@Entity()
class KickBoard extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'int', default: 100 })
  battery: number;

  @Column({ type: 'int', default: 100 })
  remaingTime: number;

  @Column({ type: 'double precision', default: 0 })
  latitude: number;

  @Column({ type: 'double precision', default: 0 })
  longitude: number;

  @Column({ type: 'double precision', default: 0 })
  lastLatitude: number;

  @Column({ type: 'double precision', default: 0 })
  lastLongitude: number;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  unLockPrice: number;

  @Column({ type: 'int', default: 0 })
  freeTime: number;

  @Column({ type: 'boolean', default: true })
  isExisting: boolean;

  @OneToMany((type) => Ride, (ride) => ride.kickboard)
  ride: KickBoard;

  @ManyToOne((type) => Alarm, (alarm) => alarm.kickboard)
  alarm: Alarm;

  @ManyToOne(
    (type) => ServiceLocation,
    (serviceLocation) => serviceLocation.kickboard,
  )
  serviceLocation: ServiceLocation;

  @CreateDateColumn() createdAt: string;

  @UpdateDateColumn() updatedAt: string;

  @BeforeInsert()
  createDefultLastLocation() {
    this.lastLatitude = this.latitude;
    this.lastLongitude = this.longitude;
  }
}

export default KickBoard;

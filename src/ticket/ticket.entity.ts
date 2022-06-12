import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ZoneEntity } from '@app/zone/zone.entity';

@Entity({ name: 'tickets' })
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'license_plate' })
  licensePlate: string;

  @Column({ type: 'timestamptz', name: 'issued_at', default: new Date() })
  issuedAt: Date;

  @Column({ type: 'timestamptz', name: 'expires_at' })
  expiresAt: Date;

  @ManyToOne(() => ZoneEntity, zone => zone.tickets)
  @JoinColumn({ name: 'zone_id' })
  zone: ZoneEntity;

  //   @ManyToOne(()) todo implement TVM relation
}

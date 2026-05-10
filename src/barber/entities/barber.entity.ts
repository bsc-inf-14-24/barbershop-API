// src/barber/entities/barber.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('barber')
export class Barber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ default: true })
  available: boolean;
}
/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn({ name: 'codigo' })
  id: number;
  @Column({
    length: 50,
    name: 'nome',
  })
  name: string;
}

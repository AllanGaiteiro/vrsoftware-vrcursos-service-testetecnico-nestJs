import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  codigo: number;
  @Column({ length: 50 })
  nome: string;
}

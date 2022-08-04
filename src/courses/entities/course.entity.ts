import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column({ length: 50 })
  descricao: string;

  @Column()
  ementa: string;
}

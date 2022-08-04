import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Matriculation {
  @PrimaryGeneratedColumn()
  codigo: number;

  @Column()
  codigoAluno: number;

  @Column()
  codigoCurso: number;
}

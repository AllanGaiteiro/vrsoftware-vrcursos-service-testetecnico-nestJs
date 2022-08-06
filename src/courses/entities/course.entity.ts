import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn({ name: 'codigo' })
  id: number;

  @Column({ length: 50, name: 'descricao' })
  description: string;

  @Column({ name: 'ementa' })
  menu: string;
}

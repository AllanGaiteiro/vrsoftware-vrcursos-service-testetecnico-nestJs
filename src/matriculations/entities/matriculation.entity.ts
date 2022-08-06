import { Course } from 'src/courses/entities/course.entity';
import { Student } from 'src/students/entities/student.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Matriculation {
  @PrimaryGeneratedColumn()
  codigo: number;

  @ManyToOne(() => Student, (student) => student.id, { cascade: true })
  @JoinColumn({ name: 'codigo_aluno' })
  student: Student;

  @ManyToOne(() => Course, (course) => course.id, { cascade: true })
  @JoinColumn({ name: 'codigo_curso' })
  course: Course;
}

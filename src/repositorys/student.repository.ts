/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';
import { UpdateStudentDto } from 'src/students/dto/update-student.dto';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class StudentRepository {
  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('students');
    
  public async getStudent(id: string): Promise<any> {
    return this._collectionRef.doc(id).get();
  }

  public async getStudents(): Promise<Student[]> {
    return (await this._collectionRef.get()).docs.map((d) => ({
      codigo: d.id,
      ...(d.data() as Student),
    }));
  }

  public async createStudent({
    student,
  }: {
    student: CreateStudentDto;
  }): Promise<any> {
    return this._collectionRef.add(student);
  }

  public async updateStudent(
    id: string,
    student: UpdateStudentDto,
  ): Promise<any> {
    return this._collectionRef.doc(id).update({ ...student });
  }

  public async deleteStudent(id: string): Promise<any> {
    return this._collectionRef.doc(id).delete();
  }
}

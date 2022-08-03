/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { UpdateCourseDto } from 'src/courses/dto/update-course.dto';
import { Course } from 'src/courses/entities/course.entity';
@Injectable()
export class CourseRepository {
  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('courses');
  public async getCourse(id: string): Promise<any> {
    return this._collectionRef.doc(id).get();
  }
  public async getCourses(): Promise<Course[]> {
    return (await this._collectionRef.get()).docs.map((d) => ({
      codigo: d.id,
      ...(d.data() as Course),
    }));
  }
  public async createCourse(course: Course): Promise<any> {
    return this._collectionRef.add(course);
  }
  public async updateCourse(id: string, course: UpdateCourseDto): Promise<any> {
    return this._collectionRef.doc(id).update({ ...course });
  }
  public async deleteCourse(id: string): Promise<any> {
    return this._collectionRef.doc(id).delete();
  }
}

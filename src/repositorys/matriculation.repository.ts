/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { CreateMatriculationDto } from 'src/matriculations/dto/create-matriculation.dto';
import { UpdateMatriculationDto } from 'src/Matriculations/dto/update-Matriculation.dto';
import { Matriculation } from 'src/Matriculations/entities/Matriculation.entity';

@Injectable()
export class MatriculationRepository {
  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('matriculations');

  public async getMatriculation(id: string): Promise<any> {
    return this._collectionRef.doc(id).get();
  }

  public async getMatriculations(): Promise<Matriculation[]> {
    return (await this._collectionRef.get()).docs.map((d) => ({
      codigo: d.id,
      ...(d.data() as Matriculation),
    }));
  }

  public async createMatriculation(
    matriculation: CreateMatriculationDto,
  ): Promise<any> {
    return this._collectionRef.add(matriculation);
  }

  public async updateMatriculation({
    id,
    matriculation,
  }: {
    id: string;
    matriculation: UpdateMatriculationDto;
  }): Promise<any> {
    return this._collectionRef.doc(id).update({ ...matriculation });
  }
  
  public async deleteMatriculation(id: string): Promise<any> {
    return this._collectionRef.doc(id).delete();
  }
}

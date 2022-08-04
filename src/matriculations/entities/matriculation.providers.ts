/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { Matriculation } from './matriculation.entity';

export const matriculationProviders = [
  {
    provide: 'MATRICULATION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Matriculation),
    inject: ['DATA_SOURCE'],
  },
];

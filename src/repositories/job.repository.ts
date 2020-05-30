import BaseRepository from './base.repository';
import { IJob } from '../types';

export default class JobRepository extends BaseRepository<IJob> {
  
  public constructor() {
    super('jobs');
  }
}

import BaseRepository from './base.repository';
import { ISkill } from '../types';

export default class SkillRepository extends BaseRepository<ISkill> {
  
  public constructor() {
    super('skills');
  }

  public getByName(name: string) {
    return this.getBy({ name });
  }
}

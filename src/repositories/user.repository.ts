import BaseRepository from './base.repository';
import { IUser } from '../types';

export default class UserRepository extends BaseRepository<IUser> {
  
  public constructor() {
    super('users');
  }

  public getByEmail(email: string) {
    return this.getBy({ email });
  }

  public getByVerificationCode(verificationCode: string) {
    return this.getBy({ verificationCode });
  }
}

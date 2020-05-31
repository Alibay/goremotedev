import { IPasswordEncoder } from '../../types';
import bcrypt from 'bcrypt';

export default class BcryptPasswordEncoder implements IPasswordEncoder {

  public constructor(private readonly rounds: number) {}

  public encode(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  public verify(plain: string, encoded: string): Promise<boolean> {
    return bcrypt.compare(plain, encoded);
  }
}

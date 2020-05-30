import { Request, Response, NextFunction } from 'express';
import UserRepository from '../repositories/user.repository';

export default class UserService {

  private readonly userRepository = new UserRepository();

  public async register(req: Request, res: Response, next: NextFunction) {
    const { email } = req.body;
    const user = await this.userRepository.getByEmail(email);
    if (user) {
      return next('User already exists');
    }

    res.render('user/register');
  }
}

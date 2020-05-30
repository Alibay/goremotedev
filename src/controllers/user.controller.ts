import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';

export default class UserController {

  private readonly userRepository = new UserRepository();

  public async getUsers(_req: Request, res: Response) {
    const users = this.userRepository.getAll();
    res.render('user/list', { users });
  }
}

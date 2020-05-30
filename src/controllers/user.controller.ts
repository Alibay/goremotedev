import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';

export default class UserController {

  private readonly userRepository = new UserRepository();

  public async getUsers(_req: Request, res: Response) {
    const users = await this.userRepository.getAll();
    res.render('user/list', { users });
  }

  public async verifyUser(req: Request, res: Response) {
    const { code } = req.params;
    const user = await this.userRepository.getByVerificationCode(code);
    if (!user) {
      res.redirect('/');
    }

    res.redirect('/');
  }

  public async registerView(_req: Request, res: Response) {
    res.render('user/register');
  }

  public async register() {}

  public loginView(_req: Request, res: Response) {
    res.render('user/login');
  }

  public async login() {}

  public forgotPasswordView(_req: Request, res: Response) {
    res.render('user/forgot-password');
  }

  public async forgotPassword() {}
}

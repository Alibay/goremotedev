import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';
import { getLogger } from '../factories/logger';
import UserService from '../services/user.service';

const logger = getLogger('UserController');

export default class UserController {

  public constructor(
    private readonly userRepository: UserRepository,
    private readonly userService: UserService,
  ) {}

  public async getUsers(_req: Request, res: Response) {
    const users = await this.userRepository.getAll();
    res.render('user/list', { users });
  }

  public async verifyUser(req: Request, res: Response) {
    const id = +(req.query.id as string);
    const code = req.query.code as string;

    const user = await this.userRepository.get(id);
    if (!user) {
      logger.warn({ id, code }, 'user verification failed: user not found');
      return res.redirect('/');
    }

    if (user.verificationCode != code) {
      logger.warn({ id, code }, 'user verification failed: codes not match');
      return res.redirect('/');
    }

    user.verificationCode = null;
    user.verifiedAt = new Date();
    user.verified = true;
    await this.userRepository.updateBy(user, { id });

    res.redirect('/');
  }

  public async register(req: Request, res: Response) {
    logger.trace(req.body, 'User registeration');
    // TODO: validate
    const user = await this.userRepository.getByEmail(req.body.email);
    if (user) {
      logger.warn(req.body, 'user is already exists');
      return res.render('user/register', {
        error: 'user is already exists'
      });
    }

    await this.userService.register(req.body);

    res.redirect('/');
  }

  public loginView(_req: Request, res: Response) {
    res.render('user/login');
  }

  public async login() {}

  public forgotPasswordView(_req: Request, res: Response) {
    res.render('user/forgot-password');
  }

  public async forgotPassword() {}
}

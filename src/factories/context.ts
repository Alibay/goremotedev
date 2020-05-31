import UserController from '../controllers/user.controller';
import UserRepository from '../repositories/user.repository';
import HomeController from '../controllers/home.controller.';
import JobController from '../controllers/job.controller';
import MailService from '../services/mail.service';
import UserService from '../services/user.service';
import MailgunMailProvider from '../utils/mailgun-mail-provider';
import BcryptPasswordEncoder from '../utils/security/bcryt-password-encoder';
import JobRepository from '../repositories/job.repository';
import UserMapper from '../mappers/user.mapper';

// repositories
export const jobRepository = new JobRepository();
export const userRepository = new UserRepository();

// mappers
export const userMapper = new UserMapper();

// components
export const mailProvider = new MailgunMailProvider();
export const passwordEncoder = new BcryptPasswordEncoder(12);

// services
export const mailService = new MailService(mailProvider);
export const userService = new UserService(
  userRepository,
  passwordEncoder,
  mailService,
  userMapper,
);

// controllers
export const userController = new UserController(userRepository, userService);
export const jobController = new JobController(jobRepository);
export const homeController = new HomeController();

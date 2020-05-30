import { Router } from 'express';
import HomeController from '../controllers/home.controller.';
import UserController from '../controllers/user.controller';
import JobController from '../controllers/job.controller';

const _ = Router();

const homeController = new HomeController();
const userController = new UserController();
const jobController = new JobController();

_.get('/', homeController.homepage.bind(homeController));

_.get ('/login', userController.loginView.bind(userController));
_.post('/login', userController.login.bind(userController));
_.get ('/register', userController.registerView.bind(userController));
_.post('/register', userController.register.bind(userController));
_.get ('/forgot-password', userController.forgotPasswordView.bind(userController));
_.post('/forgot-password', userController.forgotPassword.bind(userController));
_.get ('/verify', userController.verifyUser.bind(userController));

_.get ('/jobs', jobController.getJobs.bind(jobController));
_.get ('/job/:id', jobController.getJobs.bind(jobController));

export default _;

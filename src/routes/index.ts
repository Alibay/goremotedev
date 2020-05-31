import { Router } from 'express';
import render from '../middleware/render.middleware';
import {
  feedbackController,
  jobController,
  homeController,
  userController,
} from '../factories/context';

const _ = Router();

_.get('/', homeController.homepage.bind(homeController));

_.post('/login', userController.login.bind(userController));
_.get ('/login', render('user/login'));
_.post('/register', userController.register.bind(userController));
_.get ('/register', render('user/register'));
_.post('/forgot-password', userController.forgotPassword.bind(userController));
_.get ('/forgot-password', render('user/forgot-password'));
_.get ('/verify', userController.verifyUser.bind(userController));

_.get ('/jobs', jobController.getJobs.bind(jobController));
_.get ('/job/:id', jobController.getJobs.bind(jobController));

_.get ('/feedback', render('feedback/post'));
_.post('/feedback', feedbackController.postFeedback.bind(feedbackController));

_.get ('/admin/', homeController.adminDashboard.bind(homeController));

export default _;

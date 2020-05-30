import { Router } from 'express';
import HomeController from '../controllers/home.controller.';

const _ = Router();

const homeController = new HomeController();

_.get('/', homeController.homepage.bind(homeController));

export default _;

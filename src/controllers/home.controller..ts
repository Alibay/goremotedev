import { Request, Response } from 'express';

export default class HomeController {

  public homepage(_req: Request, res: Response) {
    res.render('home/homepage');
  }

  public adminDashboard(_req: Request, res: Response) {
    res.render('admin/dashboard', {
      layout: 'layout-admin'
    });
  }
}

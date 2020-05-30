import { Request, Response } from 'express';

export default class HomeController {

  public async homepage(_req: Request, res: Response) {
    res.render('home/homepage');
  }
}

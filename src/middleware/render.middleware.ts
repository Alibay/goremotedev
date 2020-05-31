import { Request, Response } from 'express';

export default function(template: string, options?: object) {
  return function(_req: Request, res: Response) {
    res.render(template, options);
  };
}

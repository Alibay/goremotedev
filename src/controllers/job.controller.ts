import { Request, Response, NextFunction } from 'express';
import JobRepository from '../repositories/job.repository';
import NotFoundError from '../error/not-found.error';

export default class JobController {

  private readonly jobRepository = new JobRepository();

  public async getJobs(_req: Request, res: Response) {
    res.render('job/list');
  }

  public async getJob(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const job = await this.jobRepository.get(id);
    if (!job) {
      return next(new NotFoundError(`Job ${id} not found`));
    }

    res.render('job/details', { job });
  }

  public async archiveJob(req: Request, res: Response, next: NextFunction) {

  }

  public async applyJob(req: Request, res: Response, next: NextFunction) {

  }
}

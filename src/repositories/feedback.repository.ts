import BaseRepository from './base.repository';
import { IFeedback } from '../types';

export default class FeedbackRepository extends BaseRepository<IFeedback> {

  public constructor() {
    super('feedbacks');
  }
}

import { IManagedFeedbackDto, IFeedback } from '../types';

export default class UserMapper {

  public fromManagedFeedbackDtoToFeedback(feedbackDto: IManagedFeedbackDto): IFeedback {
    return {
      email: feedbackDto.email,
      body: feedbackDto.body,
      reasonId: feedbackDto.reasonId,
    };
  }
}

import { IMailProvider } from '../types';
import config from 'config';
import { getLogger } from '../factories/logger';

const from = config.get<string>('mail.from');
const logger = getLogger('MailService');

export default class MailService {

  public constructor(private readonly mailProvider: IMailProvider) {}

  public sendVerificationCode(email: string, id: number, code: string) {
    logger.trace({ email, id, code }, 'send verification email');
    const body = 'render from template';
    return this.send(email, 'User verification', body);
  }

  private send(to: string, subject: string, body: string, isHtml = true) {
    return this.mailProvider.send(from, to, subject, body, isHtml);
  }
}

import { IMailProvider } from '../types';
import { getLogger } from '../factories/logger';

const logger = getLogger('MailgunMailProvider');

export default class MailgunMailProvider implements IMailProvider {

  public async send(from: string, to: string, subject: string, body: string, isHtml: boolean): Promise<void> {
    logger.trace({ from, to, subject, body, isHtml }, 'Send email');
  }
}

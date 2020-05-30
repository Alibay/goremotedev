import BaseError from './base.error';

export default class NotFoundError extends BaseError {
  public constructor(siteId: number) {
    super(`Resource not found, Site: ${siteId}`);
  }
}

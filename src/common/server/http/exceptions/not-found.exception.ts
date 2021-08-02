export default class NotFoundEntityException extends Error {
  constructor(message: string) {
    super(message);
    this.name = NotFoundEntityException.constructor.name;
  }
}

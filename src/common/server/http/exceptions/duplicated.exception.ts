export default class DuplicatedException extends Error {
  constructor(message: string) {
    super(message);
    this.name = DuplicatedException.constructor.name;
  }
}

import { CommandHandlerInterface } from "./interfaces";

export abstract class CommandAbstract<Handler extends CommandHandlerInterface> {
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  getHandler(): Handler {
    return this.handler;
  }
}

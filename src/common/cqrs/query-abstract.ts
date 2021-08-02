import { QueryHandlerInterface, QueryInterface } from "./interfaces";

export class QueryAbstract<Handler extends QueryHandlerInterface>
  implements QueryInterface
{
  private handler: Handler;

  constructor(handler: Handler) {
    this.handler = handler;
  }

  getHandler(): Handler {
    return this.handler;
  }
}

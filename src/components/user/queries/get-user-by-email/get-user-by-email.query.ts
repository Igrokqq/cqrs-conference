import { QueryAbstract } from "@common/cqrs/query-abstract";
import { GetUserByEmailQueryHandler } from "./get-user-by-email.query.handler";

export class GetUserByEmailQuery extends QueryAbstract<GetUserByEmailQueryHandler> {
  private email = "";

  constructor() {
    super(new GetUserByEmailQueryHandler());
  }

  setEmail(email: string): this {
    this.email = email;

    return this;
  }
}

import { CommandAbstract } from "@common/cqrs/command-abstract";
import { CreateUserCommandHandler } from "./create-user.command.handler";

export class CreateUserCommand extends CommandAbstract<CreateUserCommandHandler> {
  private email: string | null = null;

  constructor() {
    super(new CreateUserCommandHandler());
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): this {
    this.email = email;

    return this;
  }
}

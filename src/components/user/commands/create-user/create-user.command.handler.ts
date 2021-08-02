import {
  CommandHandlerInterface,
  CommandHandlerResponseInterface,
} from "@common/cqrs/interfaces";
import di, { diDependenciesIds } from "@common/server/http/di";
import { CreateUserDto } from "@components/user/dto/create-user.dto";
import { UserWriteRepository } from "@components/user/repositories/user-write.repository";
import { Container } from "inversify";
import { CreateUserCommand } from "./create-user.command";
import { CreateUserCommandMapper } from "./create-user.command.mapper";

/**
 * About validation (Request validation !== Business validation)
 * @see https://stackoverflow.com/questions/6631280/what-is-the-difference-between-a-validation-rule-and-a-business-rule
 * Validation usually refers to rules that it is not required to query database for validating them.
 * For example minimum password length. Business rules usually require a database query for validating.
 * For example you can not withdraw money more than your account balance. And this is a business rules.
 * So for example, minimum acceptable age for registering for school that is hard coded in the application is a validation rule.
 */
export class CreateUserCommandHandler implements CommandHandlerInterface {
  private userWriteRepository: UserWriteRepository;

  constructor() {
    const diContainer: Container = di.getContainer();
    this.userWriteRepository = diContainer.get(
      diDependenciesIds.USER_WRITE_REPOSITORY
    );
  }

  async execute(
    command: CreateUserCommand
  ): Promise<CommandHandlerResponseInterface> {
    await this.userWriteRepository.createOne(
      CreateUserCommandMapper.commandToDto(command) as CreateUserDto
    );
    return {
      isOk: true,
      error: null,
    };
  }
}

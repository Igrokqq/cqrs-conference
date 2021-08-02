import { QueryHandlerInterface } from "@common/cqrs/interfaces";
import di, { diDependenciesIds } from "@common/server/http/di";
import { GetUserByEmailDto } from "@components/user/dto/get-user-by-email.dto";
import { UserReadRepository } from "@components/user/repositories/user-read.repository";
import { Container } from "inversify";

/**
 * About validation (Request validation !== Business validation)
 * @see https://stackoverflow.com/questions/6631280/what-is-the-difference-between-a-validation-rule-and-a-business-rule
 * Validation usually refers to rules that it is not required to query database for validating them.
 * For example minimum password length. Business rules usually require a database query for validating.
 * For example you can not withdraw money more than your account balance. And this is a business rules.
 * So for example, minimum acceptable age for registering for school that is hard coded in the application is a validation rule.
 */
export class GetUserByEmailQueryHandler implements QueryHandlerInterface {
  private userReadRepository: UserReadRepository;

  constructor() {
    const diContainer: Container = di.getContainer();
    this.userReadRepository = diContainer.get(
      diDependenciesIds.USER_READ_REPOSITORY
    );
  }

  async execute(dto: GetUserByEmailDto): Promise<unknown> {
    return this.userReadRepository.getOneByEmail(dto.email);
  }
}

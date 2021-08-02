import { PgConnectionInterface } from "@common/database/pg/interfaces";
import TypeormPostgresManager from "@common/database/pg/manager";
import { diDependenciesIds } from "@common/server/http/di";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { Repository } from "typeorm";
import { UserEntity } from "../user.entity";
import { UserReadRepositoryInterface } from "./interfaces";

@provide(diDependenciesIds.USER_READ_REPOSITORY)
export class UserReadRepository implements UserReadRepositoryInterface {
  private userEntityRepository: Repository<UserEntity>;

  constructor(
    @inject(diDependenciesIds.PG_MANAGER) pgManager: TypeormPostgresManager
  ) {
    const connection: PgConnectionInterface = pgManager.getConnection();
    this.userEntityRepository = connection.getRepository(UserEntity);
  }

  getOneByEmail(email: string): Promise<UserEntity> {
    return this.userEntityRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}

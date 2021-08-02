import { PgConnectionInterface } from "@common/database/pg/interfaces";
import TypeormPostgresManager from "@common/database/pg/manager";
import { diDependenciesIds } from "@common/server/http/di";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../user.entity";
import { inject } from "inversify";
import { provide } from "inversify-binding-decorators";
import { UserWriteRepositoryInterface } from "./interfaces";

@provide(diDependenciesIds.USER_WRITE_REPOSITORY)
export class UserWriteRepository implements UserWriteRepositoryInterface {
  private userEntityRepository: Repository<UserEntity>;

  constructor(
    @inject(diDependenciesIds.PG_MANAGER) pgManager: TypeormPostgresManager
  ) {
    const connection: PgConnectionInterface = pgManager.getConnection();
    this.userEntityRepository = connection.getRepository(UserEntity);
  }

  async createOne(dto: CreateUserDto): Promise<void> {
    await this.userEntityRepository.save(dto as UserEntity);
  }
}

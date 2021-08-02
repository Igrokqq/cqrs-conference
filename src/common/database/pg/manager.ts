import { ConsoleLogger } from "@common/loggers/console.logger";
import { PgConnectionInterface, ManagerInterface } from "./interfaces";
import { fluentProvide } from "inversify-binding-decorators";
import { diDependenciesIds } from "@common/server/http/di";
import PgClient from "./client";
import { inject } from "inversify";

@(fluentProvide(diDependenciesIds.PG_MANAGER).inSingletonScope().done())
export default class TypeormPostgresManager
  implements ManagerInterface<PgConnectionInterface>
{
  private _connection: PgConnectionInterface;

  constructor(@inject(diDependenciesIds.PG_CLIENT) pgClient: PgClient) {
    pgClient
      .connect()
      .then((connection: PgConnectionInterface) => {
        this._connection = connection;
      })
      .catch(ConsoleLogger.error);
  }

  getConnection(): PgConnectionInterface {
    return this._connection;
  }
}

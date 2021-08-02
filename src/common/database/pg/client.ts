import { ConsoleLogger } from "@common/loggers/console.logger";
import { createConnection } from "typeorm";
import { PgClientInterface, PgConnectionInterface } from "./interfaces";
import { provide } from "inversify-binding-decorators";
import { diDependenciesIds } from "@common/server/http/di";

@provide(diDependenciesIds.PG_CLIENT)
export default class PgClient implements PgClientInterface {
  private _onCreatedConnection(connection: PgConnectionInterface): void {
    if (connection.isConnected) {
      ConsoleLogger.info("Postgres successfully started");
    }
  }

  async connect(): Promise<PgConnectionInterface> {
    try {
      const connection: PgConnectionInterface = await createConnection();

      this._onCreatedConnection(connection);

      return connection;
    } catch (error) {
      ConsoleLogger.error(error);
    }
  }
}

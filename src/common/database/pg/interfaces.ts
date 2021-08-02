import { Connection } from "typeorm";

export interface ManagerInterface<Connection> {
  getConnection(): Connection;
}
export interface PgConnectionInterface extends Connection {}
export interface PgClientInterface {
  connect(): Promise<PgConnectionInterface>;
}

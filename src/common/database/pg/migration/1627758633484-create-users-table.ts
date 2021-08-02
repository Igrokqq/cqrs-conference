import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

const TABLE_NAME = "users";
const idColumn = new TableColumn({
  name: "id",
  type: "integer",
  isPrimary: true,
  isGenerated: true,
  generationStrategy: "increment",
});
const emailColumn = new TableColumn({
  name: "email",
  type: "varchar",
  length: "64",
  default: null,
  isUnique: true,
  isNullable: false,
});
const createdAtColumn = new TableColumn({
  name: "created_at",
  type: "timestamp",
  default: "CURRENT_TIMESTAMP",
  isNullable: false,
});
const updatedAtColumn = new TableColumn({
  name: "updated_at",
  type: "timestamp",
  default: "CURRENT_TIMESTAMP",
  isNullable: false,
});
const UsersTable = new Table({
  name: TABLE_NAME,
  columns: [idColumn, emailColumn, createdAtColumn, updatedAtColumn],
});

export class createUsers1626543804633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(UsersTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable(TABLE_NAME, true);
  }
}

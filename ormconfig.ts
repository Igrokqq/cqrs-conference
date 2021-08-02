export default {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ["src/components/**/*.entity.ts", "dist/components/**/*.entity.js"],
  migrations: ["src/common/database/pg/migration/**/*.ts"],
  subscribers: ["src/common/database/pg/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/components",
    migrationsDir: "src/common/database/pg/migration",
    subscribersDir: "src/common/database/pg/subscriber",
  },
};

// DONT REMOVE IT. IF YOU REMOVE IT YOU CANNOT USE PATH SHORTCUTS LIKE @src
import "module-alias/register";
import "reflect-metadata";
import HttpServer from "@common/server/http";

async function bootstrap(): Promise<void> {
  const httpServer: HttpServer = new HttpServer();

  await httpServer.run();
}
bootstrap();

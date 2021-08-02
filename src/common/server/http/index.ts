import express from "express";
import { ConsoleLogger } from "@common/loggers/console.logger";
import config from "@common/config";
import { ServerInterface } from "../interfaces";
import HttpServerDependencies from "@common/server/http/dependencies";
import di from "./di";
import { InversifyExpressServer } from "inversify-express-utils";
import { HttpServerExceptionFilter } from "./exception.filter";

export default class HttpServer implements ServerInterface {
  private app: express.Application;

  constructor() {
    const server: InversifyExpressServer = new InversifyExpressServer(
      di.getContainer(),
      null,
      { rootPath: config.server.router.apiBaseUrl }
    );
    server.setConfig(new HttpServerDependencies().init);
    server.setErrorConfig(
      HttpServerExceptionFilter.listenExceptions.bind(HttpServerExceptionFilter)
    );
    this.app = server.build();
  }

  async run(): Promise<void> {
    this.app.listen(config.server.port, () => {
      ConsoleLogger.log(
        `The Server successfully is running on ${config.server.port}`
      );
    });
  }
}

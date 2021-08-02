import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import { ServerDependenciesInterface } from "@common/server/interfaces";
import config from "@common/config";

export default class HttpServerDependencies
  implements ServerDependenciesInterface
{
  init(app: express.Application): void {
    app.use(helmet());
    app.use(cors(config.server.corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(compression());
    if (config.envMode.isDevelopment) {
      app.use(morgan("combined"));
    }
  }
}

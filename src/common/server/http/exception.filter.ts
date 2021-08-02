import { ConsoleLogger } from "@common/loggers/console.logger";
import DuplicatedException from "./exceptions/duplicated.exception";
import NotFoundEntityException from "./exceptions/not-found.exception";
import express from "express";
import { ValidationError } from "joi";

export class HttpServerExceptionFilter {
  static listenExceptions(app: express.Application): void {
    app.use(this._catch);
  }

  static _catch(
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): express.Response {
    ConsoleLogger.error(error.stack);

    if (error instanceof ValidationError) {
      return res.status(422).json({
        message: "Validation Failed",
        errors: error.toString(),
      });
    }
    if (error instanceof NotFoundEntityException) {
      return res.status(404).json({
        message: "Entity not found",
        errors: error.toString(),
      });
    }
    if (error instanceof DuplicatedException) {
      return res.status(409).json({
        message: "Entity already exists",
        errors: error.toString(),
      });
    }

    return res.status(500).json({
      message: "Internal Server Error",
      errors: error.toString(),
    });
  }
}

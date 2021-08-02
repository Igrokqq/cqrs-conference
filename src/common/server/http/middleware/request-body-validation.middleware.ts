import express from "express";
import {
  RequestBodyValidationMiddlewareHandler,
  RequestValidationInterface,
} from "../interfaces";

export default class RequestBodyValidationMiddleware {
  private validator: RequestValidationInterface;

  constructor(validator: RequestValidationInterface) {
    this.validator = validator;
  }

  public getHandler(): RequestBodyValidationMiddlewareHandler {
    const validator: RequestValidationInterface = this.validator;
    return (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      validator.throwExceptionIfInvalid(req.body);
      next();
    };
  }
}

import express from "express";

export interface RequestValidationInterface {
  throwExceptionIfInvalid(dto: unknown): never | void;
}
export type RequestBodyValidationMiddlewareHandler = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => void;

// Responses
export interface OkResponse {
  readonly message: string;
}
export interface NotFoundResponse {
  readonly message: string;
}
export interface InternalServerErrorResponse {
  readonly message: string;
  readonly errors: string;
}
export interface DuplicatedResponse {
  readonly message: string;
}

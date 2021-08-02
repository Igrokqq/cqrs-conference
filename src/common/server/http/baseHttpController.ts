import express from "express";
import { BaseHttpController as InversifyBaseHttpController } from "inversify-express-utils";

export class BaseHttpController extends InversifyBaseHttpController {
  fail(response: express.Response, body: unknown): express.Response {
    return response.status(500).json(body);
  }

  validationFailed(
    response: express.Response,
    body: unknown
  ): express.Response {
    return response.status(422).json(body);
  }
}

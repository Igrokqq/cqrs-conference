import express from "express";
import { CommandDispatcherResponse } from "@common/cqrs/interfaces";
import { BaseHttpController } from "@common/server/http/baseHttpController";
import {
  controller,
  httpPost,
  requestBody,
  response,
} from "inversify-express-utils";
import { CreateUserCommandMapper } from "./commands/create-user/create-user.command.mapper";
import { CreateUserDto } from "./dto/create-user.dto";
import { OkNegotiatedContentResult } from "inversify-express-utils/dts/results";
import RequestBodyValidationMiddleware from "@common/server/http/middleware/request-body-validation.middleware";
import { CreateUserValidation } from "./request-validations/create-user.validation";
import { UserEntity } from "./user.entity";
import { GetUserByEmailQueryMapper } from "./queries/get-user-by-email/get-user-by-email.query.mapper";
import DuplicatedException from "@common/server/http/exceptions/duplicated.exception";
import { OkResponse } from "@common/server/http/interfaces";
import { inject } from "inversify";
import { diDependenciesIds } from "@common/server/http/di";
import CommandDispatcher from "@common/cqrs/command.dispatcher";
import QueryDispatcher from "@common/cqrs/query.dispatcher";

@controller("/users")
export default class UserController extends BaseHttpController {
  constructor(
    @inject(diDependenciesIds.COMMAND_DISPATCHER)
    private readonly commandDispatcher: CommandDispatcher,
    @inject(diDependenciesIds.QUERY_DISPATCHER)
    private readonly queryDispatcher: QueryDispatcher
  ) {
    super();
  }

  @httpPost(
    "/",
    new RequestBodyValidationMiddleware(new CreateUserValidation()).getHandler()
  )
  async create(
    @response() res: express.Response,
    @requestBody() body: CreateUserDto
  ): Promise<OkNegotiatedContentResult<OkResponse> | never> {
    const user: UserEntity = await this.queryDispatcher.execute(
      GetUserByEmailQueryMapper.dtoToQuery(body)
    );

    if (user) {
      throw new DuplicatedException("The user already exists");
    }

    const createUserCommandResult: CommandDispatcherResponse =
      await this.commandDispatcher.execute(
        CreateUserCommandMapper.dtoToCommand(body)
      );

    if (!createUserCommandResult.isOk) {
      throw createUserCommandResult.error;
    }

    return this.ok({
      message: "Successfully created",
    });
  }
}

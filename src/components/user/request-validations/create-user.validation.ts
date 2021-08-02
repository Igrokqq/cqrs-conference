import { CreateUserDto } from "../dto/create-user.dto";

import Joi, { Schema } from "joi";
import { RequestValidationInterface } from "@common/server/http/interfaces";

export class CreateUserValidation implements RequestValidationInterface {
  private schema: Schema;

  constructor() {
    this.schema = Joi.object({
      email: Joi.string().email().required(),
    });
  }

  throwExceptionIfInvalid(dto: CreateUserDto): never | void {
    const { error } = this.schema.validate(dto);

    if (error) {
      throw error;
    }
  }
}

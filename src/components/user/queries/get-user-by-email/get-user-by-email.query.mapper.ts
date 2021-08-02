import { GetUserByEmailDto } from "@components/user/dto/get-user-by-email.dto";
import { GetUserByEmailQuery } from "./get-user-by-email.query";

export class GetUserByEmailQueryMapper {
  static dtoToQuery(dto: GetUserByEmailDto): GetUserByEmailQuery {
    return new GetUserByEmailQuery().setEmail(dto.email);
  }
}

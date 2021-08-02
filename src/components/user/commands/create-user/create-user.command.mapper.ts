import { CreateUserDto } from "@components/user/dto/create-user.dto";
import { CreateUserCommand } from "./create-user.command";

export class CreateUserCommandMapper {
  static dtoToCommand(createUserDto: CreateUserDto): CreateUserCommand {
    return new CreateUserCommand().setEmail(createUserDto.email || null);
  }
  static commandToDto(command: CreateUserCommand): CreateUserDto {
    return {
      email: command.getEmail(),
    };
  }
}

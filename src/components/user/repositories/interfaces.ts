import { CreateUserDto } from "../dto/create-user.dto";
import { UserEntity } from "../user.entity";

export interface UserWriteRepositoryInterface {
  createOne(user: CreateUserDto): Promise<void>;
}
export interface UserReadRepositoryInterface {
  getOneByEmail(email: string): Promise<UserEntity>;
}
export interface UserPersistanceInterface {
  readonly email: string;
  readonly created_at: Date;
  readonly updated_at: Date;
}

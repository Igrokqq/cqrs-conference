import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

@Entity({
  name: "users",
})
export class UserEntity {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({
    type: "varchar",
    unique: true,
    length: 64,
  })
  readonly email = "";

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  readonly created_at: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  readonly updated_at: Date;
}

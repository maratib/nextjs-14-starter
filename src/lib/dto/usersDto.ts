import { IsNotEmpty, IsEmail } from "class-validator";

export class CreateUserDTO {
  @IsEmail()
  email: string;
}

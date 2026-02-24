import { IsEmail, IsPhoneNumber, IsString } from "class-validator";
import { RegisterRequestDto } from "src/authentification/dtos/register.request.dto";

export class CreateUserDto extends RegisterRequestDto
{
  
}

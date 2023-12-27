import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  readonly brand: string;
  @IsString()
  @IsNotEmpty()
  readonly model: string;
}

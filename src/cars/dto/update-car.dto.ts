import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsOptional()
  readonly brand?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly model?: string;
}

import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateBarberDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
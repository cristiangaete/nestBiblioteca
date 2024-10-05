import { IsString } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  photo: string;

  @IsString()
  subject: string;

  @IsString()
  message: string;
}

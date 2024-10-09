import { IsString } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  photoName: string;

  @IsString()
  subject: string;

  @IsString()
  message: string;

  // @IsString()
  // path: string;
}

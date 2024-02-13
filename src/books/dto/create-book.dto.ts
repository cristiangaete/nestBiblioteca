import { IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  tittle: string;

  // @IsString()
  // author: string;

  @IsString()
  sumarry: string;

  @IsString()
  isbn: string;

  @IsString()
  genre: string;

  @IsString()
  lenguaje: string;

  @IsString()
  @IsOptional()
  author:string;


}

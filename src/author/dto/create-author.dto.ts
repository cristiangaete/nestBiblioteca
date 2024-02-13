import { IsOptional, IsString } from "class-validator";

export class CreateAuthorDto {

    @IsString()
    name:string;

    @IsString()
    dateOfTheBird?:string;

    @IsOptional()
    dateOfTheDead?:string;


}

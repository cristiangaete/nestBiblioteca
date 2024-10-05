import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from './register.dto';

export class UpdateProfileDto extends PartialType(RegisterDto) {}

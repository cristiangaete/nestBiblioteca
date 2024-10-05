import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ActiveUser } from 'src/common/decorator/active-user.decorator';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';


@ApiTags('subjects')
@ApiBearerAuth()
@Auth(Role.USER)
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        // const ext = extname(file.originalname); // Obtener extensión del archivo
        const randomName = Date.now() + extname(file.originalname);
        cb(null, randomName);
      },
    }),
  }))
  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto, @ActiveUser() user: UserActiveInterface, @UploadedFile() file: Express.Multer.File) {
    console.log('File: ', file);
    console.log('filePath:', file.path)
    return this.subjectService.create(createSubjectDto, user, file.path);
  } 

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.subjectService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @ActiveUser() user: UserActiveInterface) {
    return this.subjectService.findOne(+id, user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @ActiveUser() user: UserActiveInterface) {
    return this.subjectService.remove(+id, user);
  }
}

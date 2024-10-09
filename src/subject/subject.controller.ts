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
  Res,
  
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
import { extname, join } from 'path';
import { Response } from 'express';


@ApiTags('subjects')
@ApiBearerAuth()
@Auth(Role.USER)
@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          // const ext = extname(file.originalname); // Obtener extensión del archivo
          // const randomName = Date.now() + extname(file.originalname);
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @Post()
  create(
    @Body() createSubjectDto: CreateSubjectDto,
    @ActiveUser() user: UserActiveInterface,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // const  SERVER_URL =   "http://localhost:3000/";
    const  SERVER_URL =   "http://192.168.1.97:3000/";
    console.log(SERVER_URL+file.path);
    const formattedFilePath = SERVER_URL+file.path.replace(/\\/g, '/');
    console.log("formattedFilePath: ", formattedFilePath);

    return this.subjectService.create(createSubjectDto, user, formattedFilePath);
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.subjectService.findAll(user);
  }

  @Get('uploads/:imageName')
  getImage(@Param('imageName') imageName: string, @Res() res: Response) {
    // const imagePath = join(__dirname, '..', 'uploads', imageName);
    // const formattedPath = imagePath.replace(/\\/g, '/'); // Reemplazar '\\' con '/'
    // console.log(formattedPath)
    // return res.sendFile(formattedPath);
    res.sendFile(imageName, { root: 'uploads'});
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

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/rol.enum';
import { ActiveUser } from '../common/decorator/active-user.decorator';
import { UserActiveInterface } from '../common/interface/user-active.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';



@ApiTags('Books')
@ApiBearerAuth()
@Auth(Role.USER)
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto, @ActiveUser() user: UserActiveInterface) {
    return this.booksService.create(createBookDto, user);
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.booksService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @ActiveUser() user: UserActiveInterface) {
    return this.booksService.findOne(+id, user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto, @ActiveUser() user: UserActiveInterface) {
    console.log("controller: ", id,updateBookDto,user)
    return this.booksService.update(+id, updateBookDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string,  @ActiveUser() user: UserActiveInterface) {
    return this.booksService.remove(+id, user);
  }
}

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from '../author/entities/author.entity';
import { UserActiveInterface } from '../common/interface/user-active.interface';

import { Role } from '../common/enums/rol.enum';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createBookDto: CreateBookDto, user: UserActiveInterface) {
    // const author = await this.authorRepository.findOneBy({
    //   name: createBookDto.author,
    // });
    // if (!author) {
    //   throw new BadRequestException('author no found');
    // }
    const author = await this.validateAuthor(createBookDto.author);
    console.log(user.email, user.id);

    return await this.bookRepository.save({
      ...createBookDto,
      author: author,
      userEmail: user.email,
    });
  }

  async findAll(user: UserActiveInterface) {
    if (user.role === Role.ADMIN) {
      return await this.bookRepository.find();
    }
    return await this.bookRepository.find({
      where: { userEmail: user.email },
    });
  }

  async findOne(id: number, user: UserActiveInterface) {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new BadRequestException('Cat not found');
    }
     this.validationOwnerShip(book, user);

    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto, user: UserActiveInterface) {
    // return await this.bookRepository.update(id, updateBookDto);
    const book = await this.findOne(id, user);

    const author = await this.validateAuthor(updateBookDto.author);

    return await this.bookRepository.update(id,{
      ...updateBookDto,
      author: updateBookDto.author ? await this.validateAuthor(updateBookDto.author):undefined,
      userEmail: user.email
    });

  }

  async remove(id: number,  user: UserActiveInterface) {
    await this.findOne(id, user);
    return await this.bookRepository.softDelete(id);
  }

  private validationOwnerShip(book: Book, user: UserActiveInterface){
    if (user.role !== Role.ADMIN && book.userEmail !== user.email) {
      throw new UnauthorizedException();
    }
  }

  private async validateAuthor (author: string) {
    const authorEntity = await this.authorRepository.findOneBy({
      name: author,
    });
    if (!author) {
      throw new BadRequestException('author no found');
    }
    return authorEntity;
  }
}

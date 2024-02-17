import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from '../author/entities/author.entity';
import { UserActiveInterface } from '../common/interface/user-active.interface';
import { emit } from 'process';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createBookDto: CreateBookDto, user: UserActiveInterface) {
    const author = await this.authorRepository.findOneBy({name: createBookDto.author}); 
    if (!author) {
      throw new BadRequestException('author no found');
    }
    console.log(user.email, user.id)

   return await this.bookRepository.save({
    ...createBookDto,
    author: author,
    userEmail: user.email,
   })
   
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    // return await this.bookRepository.update(id, updateBookDto);
    
  }

  async remove(id: number) {
    return await this.bookRepository.softDelete(id);
  }
}

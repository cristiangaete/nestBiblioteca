import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {

  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.authorRepository.save(createAuthorDto);
  }

  async findAll() {
    return await this.authorRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  async remove(id: number) {
    return `This action removes a #${id} author`;
  }
}

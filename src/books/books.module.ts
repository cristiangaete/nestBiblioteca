import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Author } from 'src/author/entities/author.entity';
import { AuthorModule } from 'src/author/author.module';
import { AuthorService } from 'src/author/author.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AuthorModule],
  controllers: [BooksController],
  providers: [BooksService, AuthorService],
})
export class BooksModule {}

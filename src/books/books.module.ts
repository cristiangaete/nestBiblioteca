import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Author } from 'src/author/entities/author.entity';
import { AuthorModule } from 'src/author/author.module';
import { AuthorService } from 'src/author/author.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), AuthorModule, UsersModule],
  controllers: [BooksController],
  providers: [BooksService, AuthorService, ],
})
export class BooksModule {}

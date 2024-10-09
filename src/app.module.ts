import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import { SubjectModule } from './subject/subject.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BooksModule,
    AuthorModule,
    UsersModule,
    AuthModule,
    SubjectModule,
    // GenreModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../'), // Carpeta donde se guardan las imágenes
      renderPath: '/uploads',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

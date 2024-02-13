import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Author } from 'src/author/entities/author.entity';
export declare class BooksService {
    private readonly bookRepository;
    private readonly authorRepository;
    constructor(bookRepository: Repository<Book>, authorRepository: Repository<Author>);
    create(createBookDto: CreateBookDto): Promise<{
        author: Author;
        tittle: string;
        sumarry: string;
        isbn: string;
        genre: string;
        lenguaje: string;
    } & Book>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<void>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}

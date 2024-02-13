import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<{
        author: import("../author/entities/author.entity").Author;
        tittle: string;
        sumarry: string;
        isbn: string;
        genre: string;
        lenguaje: string;
    } & import("./entities/book.entity").Book>;
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<void>;
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}

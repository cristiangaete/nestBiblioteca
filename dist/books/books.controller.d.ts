import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { UserActiveInterface } from '../common/interface/user-active.interface';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto, user: UserActiveInterface): Promise<{
        author: import("../author/entities/author.entity").Author;
        userEmail: string;
        tittle: string;
        sumarry: string;
        isbn: string;
        genre: string;
        lenguaje: string;
    } & import("./entities/book.entity").Book>;
    findAll(user: UserActiveInterface): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string, user: UserActiveInterface): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateBookDto: UpdateBookDto, user: UserActiveInterface): Promise<import("typeorm").UpdateResult>;
    remove(id: string, user: UserActiveInterface): Promise<import("typeorm").UpdateResult>;
}

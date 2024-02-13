import { Book } from "src/books/entities/book.entity";
export declare class Author {
    id: number;
    name: string;
    dateOfTheBird: string;
    dateOfTheDead?: string;
    books: Book[];
}

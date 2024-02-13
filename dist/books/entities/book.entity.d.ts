import { Author } from "src/author/entities/author.entity";
export declare class Book {
    id: number;
    tittle: string;
    sumarry: string;
    isbn: string;
    genre: string;
    lenguaje: string;
    deletedAt: Date;
    author: Author;
}

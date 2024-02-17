import { Author } from '../../author/entities/author.entity';
import { User } from '../../users/entities/user.entity';
export declare class Book {
    id: number;
    tittle: string;
    sumarry: string;
    isbn: string;
    genre: string;
    lenguaje: string;
    deletedAt: Date;
    author: Author;
    user: User;
    userEmail: string;
}

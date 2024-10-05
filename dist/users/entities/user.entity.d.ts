import { Book } from 'src/books/entities/book.entity';
import { Role } from '../../common/enums/rol.enum';
import { Subject } from 'src/subject/entities/subject.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    deletedAt: Date;
    books: Book[];
    subject: Subject[];
}

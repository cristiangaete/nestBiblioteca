import { Book } from 'src/books/entities/book.entity';
import { Role } from '../../common/enums/rol.enum';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true,  nullable: false,})
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({ default: Role.USER, enum: Role })
  role: Role;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];

  @OneToMany(() => Subject, (subject) => subject.user)
  subject: Subject[];
}

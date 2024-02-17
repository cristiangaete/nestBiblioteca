import { Author } from '../../author/entities/author.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Book {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  tittle: string;

  // @Column()
  // author: string;

  @Column()
  sumarry: string;

  @Column()
  isbn: string;

  @Column()
  genre: string;

  @Column()
  lenguaje: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Author, (author) => author.id, {
    eager: true,
  })
  author: Author;

  // @ManyToOne(()=> User, (user)=> user.email,{
  //   eager:true,
  // })
  // user: User;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
  user: User;

  @Column()
  userEmail: string;
}

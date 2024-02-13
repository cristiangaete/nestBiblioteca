import { Author } from "src/author/entities/author.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Book {
    @Column({primary:true, generated:true})
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

    @ManyToOne(()=> Author, (author)=> author.id,{
        eager:true,
      })
      author: Author;
}

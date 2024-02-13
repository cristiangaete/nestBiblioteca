import { IsOptional } from "class-validator";
import { Book } from "src/books/entities/book.entity";
import { Column, Entity, IsNull, OneToMany } from "typeorm";

@Entity()
export class Author {

    @Column({primary:true, generated:true})
    id:number;

    @Column()
    name:string

    @Column()
    dateOfTheBird:string;

    @Column()
    @IsOptional()
    dateOfTheDead?:string;

    @OneToMany(()=>Book, (book)=>book.author)
    books:Book[];
}

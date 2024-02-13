import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
export declare class AuthorService {
    private readonly authorRepository;
    constructor(authorRepository: Repository<Author>);
    create(createAuthorDto: CreateAuthorDto): Promise<CreateAuthorDto & Author>;
    findAll(): Promise<Author[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<string>;
    remove(id: number): Promise<string>;
}

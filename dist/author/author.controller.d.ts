import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): Promise<CreateAuthorDto & import("./entities/author.entity").Author>;
    findAll(): Promise<import("./entities/author.entity").Author[]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateAuthorDto: UpdateAuthorDto): Promise<string>;
    remove(id: string): Promise<string>;
}

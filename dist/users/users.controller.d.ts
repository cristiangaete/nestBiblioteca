import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto, user: UserActiveInterface): Promise<import("typeorm").UpdateResult>;
    remove(id: string): string;
}

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findOneByEmail(email: string): Promise<User>;
    findOneEmailPassword(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto, user: UserActiveInterface): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}

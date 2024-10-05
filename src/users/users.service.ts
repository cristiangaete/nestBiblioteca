import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(email:string){
    return this.userRepository.findOneBy({email});
  }

  findOneEmailPassword(email: string){
    return this.userRepository.findOne({
      where: {email},
      select: ['id', 'name', 'email', 'password' ,'role']
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto, user: UserActiveInterface) {
    console.log(updateUserDto)
    console.log(user.email)

    return await this.userRepository.update(id,{
      ...updateUserDto,
      // author: updateBookDto.author ? await this.validateAuthor(updateBookDto.author):undefined,
      // genre: genre,
      email: user.email
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

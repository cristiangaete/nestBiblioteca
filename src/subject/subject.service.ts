import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/common/enums/rol.enum';

@Injectable()
export class SubjectService {

  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ){}

  async create(createSubjectDto: CreateSubjectDto, user: UserActiveInterface, path: string) {

    console.log(user.email, user.id);
    createSubjectDto.photo = path;
    return await this.subjectRepository.save({
      ...createSubjectDto,
      userEmail: user.email,
    });
  }

  async findAll(user: UserActiveInterface) {
    if (user.role === Role.ADMIN) {
      return await this.subjectRepository.find();
    }
    return await this.subjectRepository.find({
      where: { userEmail: user.email },
    });
  }

  async findOne(id: number, user: UserActiveInterface) {
    const subject = await this.subjectRepository.findOneBy({ id });
    console.log(subject)
    if (!subject) {
      throw new BadRequestException('Cat not found');
    }
     this.validationOwnerShip(subject, user);

    return subject;
  }



  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  async remove(id: number, user: UserActiveInterface) {
    await this.findOne(id, user);
    return await this.subjectRepository.delete(id);
  }



  private validationOwnerShip(subject: Subject, user: UserActiveInterface){
    if (user.role !== Role.ADMIN && subject.userEmail !== user.email) {
      throw new UnauthorizedException();
    }
  }
}



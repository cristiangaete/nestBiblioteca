import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
export declare class SubjectService {
    private readonly subjectRepository;
    constructor(subjectRepository: Repository<Subject>);
    create(createSubjectDto: CreateSubjectDto, user: UserActiveInterface, path: string): Promise<{
        path: string;
        userEmail: string;
        photoName: string;
        subject: string;
        message: string;
    } & Subject>;
    findAll(user: UserActiveInterface): Promise<Subject[]>;
    findOne(id: number, user: UserActiveInterface): Promise<Subject>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): string;
    remove(id: number, user: UserActiveInterface): Promise<import("typeorm").DeleteResult>;
    private validationOwnerShip;
}

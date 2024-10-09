/// <reference types="multer" />
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
import { Response } from 'express';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    create(createSubjectDto: CreateSubjectDto, user: UserActiveInterface, file: Express.Multer.File): Promise<{
        path: string;
        userEmail: string;
        photoName: string;
        subject: string;
        message: string;
    } & import("./entities/subject.entity").Subject>;
    findAll(user: UserActiveInterface): Promise<import("./entities/subject.entity").Subject[]>;
    getImage(imageName: string, res: Response): void;
    findOne(id: string, user: UserActiveInterface): Promise<import("./entities/subject.entity").Subject>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): string;
    remove(id: string, user: UserActiveInterface): Promise<import("typeorm").DeleteResult>;
}

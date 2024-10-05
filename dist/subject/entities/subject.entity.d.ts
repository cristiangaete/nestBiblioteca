import { User } from "src/users/entities/user.entity";
export declare class Subject {
    id: number;
    photo: string;
    subject: string;
    message: String;
    timeSubject: Date;
    user: User;
    userEmail: string;
}

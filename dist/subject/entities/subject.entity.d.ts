import { User } from "src/users/entities/user.entity";
export declare class Subject {
    id: number;
    photoName: string;
    subject: string;
    message: String;
    path: String;
    timeSubject: Date;
    user: User;
    userEmail: string;
}

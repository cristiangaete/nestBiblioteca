import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subject {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string

  @Column()
  subject: string

  @Column()
  message: String

  @CreateDateColumn()
  timeSubject: Date

  // @DeleteDateColumn()
  // deletedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userEmail', referencedColumnName: 'email',  })
  user: User;

  @Column()
  userEmail: string;

}

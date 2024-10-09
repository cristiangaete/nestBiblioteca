import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subject {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  photoName: string

  @Column()
  subject: string

  @Column()
  message: String

  @Column()
  path: String

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

import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { TasksEntity } from '../../../../../tasks/src/infrastructure/entities/task.entity';
import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { ITask } from '@project-tasks/domain/interfaces/task.interface';
@Entity('user')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'firstName', nullable: false })
  firstName: string;
  @Column({ name: 'lastName' })
  lastName: string;
  @Column({ name: 'email', nullable: false })
  email: string;
  @Column({ name: 'password', nullable: false })
  password: string;
  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: IProject[];
  @OneToMany(() => TasksEntity, (task) => task.user)
  tasks: ITask[];
}

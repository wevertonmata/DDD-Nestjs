import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
import { UserEntity } from './user.entity';
import { TasksEntity } from '../../../../../tasks/src/infrastructure/entities/task.entity';
import { ITask } from '@project-tasks/domain/interfaces/task.interface';
import { IUser } from '@project-manager-api/domain/interfaces/user.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('project')
export class ProjectEntity implements IProject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', nullable: false })
  name: string;
  @Column({ name: 'description', nullable: false })
  description: string;
  @OneToMany(() => TasksEntity, (task) => task.project)
  tasks: ITask[];
  @ManyToOne(() => UserEntity, (user) => user.projects)
  @JoinColumn()
  user: IUser;
}

import { ITask } from '@project-tasks/domain/interfaces/task.interface';
import { IProject } from '../interfaces/project.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  user: IUser;
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  users: IUser;
}

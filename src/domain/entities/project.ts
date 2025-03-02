import { IProject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class Project implements IProject {
  user: IUser;
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  users: IUser;
}

import { Iproject } from './project.interface';
import { ITask } from './task.interface';

export class IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  projects: Iproject[];
  tasks: ITask[];
}

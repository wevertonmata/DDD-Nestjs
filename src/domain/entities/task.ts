import { Iproject } from '../interfaces/project.interface';
import { ITask } from '../interfaces/task.interface';
import { IUser } from '../interfaces/user.interface';

export class User implements Iproject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  users: IUser;
}

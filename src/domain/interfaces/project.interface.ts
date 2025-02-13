import { ITask } from './task.interface';
import { IUser } from './user.interface';

export interface Iproject {
  id: number;
  name: string;
  description: string;
  tasks: ITask[];
  users: IUser;
}

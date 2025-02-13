import { Iproject } from './project.interface';
import { IUser } from './user.interface';

export class ITask {
  id: number;
  name: string;
  description: string;
  status: string;
  project: Iproject;
  user: IUser;
}

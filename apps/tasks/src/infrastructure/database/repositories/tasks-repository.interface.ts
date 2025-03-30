import { ITask } from 'apps/tasks/src/domain/interfaces/task.interface';
import { DeepPartial } from 'typeorm';

export interface ITasksRepository {
  findAll(userId: number): Promise<ITask[]>;
  findById(id: number): Promise<ITask>;
  add(payload: DeepPartial<ITask>): Promise<ITask>;
  updateById(payload: DeepPartial<ITask>): Promise<ITask>;
}

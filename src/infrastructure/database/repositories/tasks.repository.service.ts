import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { ITask } from 'src/domain/interfaces/task.interface';
import { ITasksRepository } from 'src/domain/repositories/tasks-repository.interface';
import { TasksEntity } from '../entities/task.entity';
@Injectable()
export class TasksRepositoryService
  extends Repository<TasksEntity>
  implements ITasksRepository
{
  constructor(dataSource: DataSource) {
    super(TasksEntity, dataSource.createEntityManager());
  }
  findAll(userId: number): Promise<ITask[]> {
    return this.findBy({ user: { id: userId } });
  }
  async findById(id: number): Promise<ITask> {
    const task = await this.findOneBy({ id });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }
  add(payload: DeepPartial<ITask>): Promise<ITask> {
    return this.save(payload) as unknown as Promise<ITask>;
  }
  updateById(payload: DeepPartial<ITask>) {
    if (payload.id === undefined) {
      throw new Error('Payload id is undefined');
    }
    return this.update(payload.id, payload);
  }
}

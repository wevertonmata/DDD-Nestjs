import { Injectable } from '@nestjs/common';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { ITask } from '../../../domain/interfaces/task.interface';
import { ITasksRepository } from '../repositories/tasks-repository.interface';
import { TasksEntity } from '../../entities/task.entity';
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

  async updateById(payload: DeepPartial<ITask>): Promise<ITask> {
    if (payload.id === undefined) {
      throw new Error('Payload id is undefined');
    }
    await this.update(payload.id, payload);
    const updatedTask = await this.findOneBy({ id: payload.id });
    if (!updatedTask) {
      throw new Error('Task not found after update');
    }
    return updatedTask;
  }
}

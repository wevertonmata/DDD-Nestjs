import { Module } from '@nestjs/common';
import { ProjectsRepositoryService } from './repositories/projects.repository.service';
import { UsersRepositoryService } from './repositories/users.repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from '@project-tasks/infrastructure/entities/task.entity';
import { ProjectEntity } from './entities/project.entity';
import { UserEntity } from './entities/user.entity';
import { TasksRepositoryService } from '@project-tasks/infrastructure/database/repositories/tasks.repository.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TasksEntity, ProjectEntity, UserEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.sqlite',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  providers: [
    TasksRepositoryService,
    ProjectsRepositoryService,
    UsersRepositoryService,
  ],
  exports: [
    TasksRepositoryService,
    ProjectsRepositoryService,
    UsersRepositoryService,
  ],
})
export class DatabaseModule {}

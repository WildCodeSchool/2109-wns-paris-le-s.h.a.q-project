/* eslint-disable class-methods-use-this */
import { Resolver, Query } from 'type-graphql';
import Task from '../entity/Task';
import TaskModels from '../models/TaskModels';

@Resolver(Task)
class TaskResolver {
  @Query(() => [Task])
  async allTasks() {
    const tasks = await TaskModels.find();
    return tasks;
  }
}
export default TaskResolver;

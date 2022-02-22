/* eslint-disable class-methods-use-this */
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateTaskInput from '../entity/CreateTaskInput';
import UpdateTaskInput from '../entity/UpdateTaskInput';
import Task from '../entity/Task';
import TaskModels from '../models/TaskModels';

@Resolver(Task)
class TaskResolver {
  @Query(() => [Task])
  async allTasks() {
    const tasks = await TaskModels.find();
    return tasks;
  }

  @Mutation(() => Task)
  async createTask(
    @Arg('input') createTaskInput: CreateTaskInput
  ): Promise<Task> {
    const newTask = new TaskModels(createTaskInput);
    await newTask.save();
    return newTask;
  }

  @Query(() => Task)
  findOneTask(@Arg('id') _id: string) {
    return TaskModels.findOne({ _id }).exec();
  }

  // Search Field
  @Query(() => [Task])
  async findTaskByKeyword(@Arg('searchField') SearchTaskInput: string) {
    const taskList = await TaskModels.find({
      $or: [
        { subject: SearchTaskInput },
        { description: SearchTaskInput },
        { project: SearchTaskInput },
        { status: SearchTaskInput },
        { assignee: SearchTaskInput },
      ],
    }).exec();
    if (!TaskResolver) throw new Error('No result for your search!');
    return taskList;
  }

  @Mutation(() => Task)
  async updateTask(@Arg('id') _id: string, @Arg('data') data: UpdateTaskInput) {
    const task = await TaskModels.findOne({ _id }).exec();
    if (!TaskResolver) throw new Error('Task not found!');
    if (task !== null && task !== undefined) {
      Object.assign(task, data);
      await task.save();
    }
    return task;
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg('id') _id :string) {
    const task = await TaskModels.findOne({ _id }).exec();
    if (!TaskResolver) throw new Error('Task not found!');
    if (task !== null && task !== undefined) {
      await task.remove();
    }
    return true;
  }
}
export default TaskResolver;

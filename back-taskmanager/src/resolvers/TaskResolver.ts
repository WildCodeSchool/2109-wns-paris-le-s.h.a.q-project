/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { Resolver, Query, Mutation, Arg, Authorized } from 'type-graphql';
// import { isAuth } from '../modules/middleware/isAuth';
import CreateTaskInput from '../entity/inputs/CreateTaskInput';
import UpdateTaskInput from '../entity/inputs/UpdateTaskInput';
import Task from '../entity/entities/Task';
import TaskModels from '../models/TaskModel';

@Resolver(Task)
class TaskResolver {
  @Authorized()
  @Query(() => [Task])
  async allTasks() {
    const tasks = await TaskModels.find();
    return tasks;
  }

  @Mutation(() => Task)
  async createTask(@Arg('input') createTaskInput: CreateTaskInput) {
    try {
      const newTask = new TaskModels(createTaskInput);
      await newTask.save();
      console.log('newTask', newTask);
      return newTask;
    } catch (err) {
      return console.log(err);
    }
  }

  @Query(() => Task)
  findOneTask(@Arg('id') _id: string) {
    return TaskModels.findOne({ _id }).exec();
  }

  // Search Field
  @Query(() => [Task])
  async findTaskByKeyword(@Arg('searchField') SearchTaskInput: string) {
    const regex = new RegExp(`^${SearchTaskInput}$`, 'i');
    const taskList = await TaskModels.find({
      $or: [{ subject: regex }, { description: regex }, { status: regex }],
    }).exec();
    if (!TaskResolver) throw new Error('No result for your search!');
    return taskList;
  }

  @Mutation(() => Task)
  async updateTask(@Arg('id') _id: string, @Arg('data') data: UpdateTaskInput) {
    const task = await TaskModels.findOne({ _id }).exec();
    if (!task) throw new Error('Task not found!');
    if (task !== null && task !== undefined) {
      Object.assign(task, data);
      await task.save();
    }
    return task;
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg('id') _id: string) {
    const task = await TaskModels.findOne({ _id }).exec();
    if (!task) throw new Error('Task not found!');
    if (task !== null && task !== undefined) {
      await task.remove();
    }
    return true;
  }
}
export default TaskResolver;

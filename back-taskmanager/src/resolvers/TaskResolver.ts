/* eslint-disable class-methods-use-this */
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateTaskInput from '../entity/CreateTaskInput';
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

  /* @Mutation(() => Book)
async updateBook(@Arg("id") id: string, @Arg("data") data: UpdateBookInput) {
  const book = await Book.findOne({ where: { id } });
  if (!book) throw new Error("Book not found!");
  Object.assign(book, data);
  await book.save();
  return book;
} */

  /* @Mutation(() => Boolean)
async deleteBook(@Arg("id") id: string) {
  const book = await Book.findOne({ where: { id } });
  if (!book) throw new Error("Book not found!");
  await book.remove();
  return true;
} */
}
export default TaskResolver;

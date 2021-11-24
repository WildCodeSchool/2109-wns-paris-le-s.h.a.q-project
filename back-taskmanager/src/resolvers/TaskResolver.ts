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

  /*   @Mutation(() => Book)
async createBook(@Arg("data") data: CreateBookInput) {
  const book = Book.create(data);
  await book.save();
  return book;
} */

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

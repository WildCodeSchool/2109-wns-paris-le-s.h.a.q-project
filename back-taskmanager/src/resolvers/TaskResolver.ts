/* eslint-disable class-methods-use-this */
import { Resolver, Query } from 'type-graphql';
import Task from '../models/Task';

@Resolver()
export default class TaskResolver {
  @Query(() => [Task])
  tasks() {
    return Task.find();
  }
}

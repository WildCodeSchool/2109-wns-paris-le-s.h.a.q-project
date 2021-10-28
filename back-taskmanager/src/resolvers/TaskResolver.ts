/* eslint-disable class-methods-use-this */
import { Resolver, Query } from "type-graphql";
import TaskModel from "../models/TaskModel";

@Resolver()
export default class TaskResolver {
  @Query(() => [TaskModel])
  tasks() {
    return TaskModel;
  }
}
import { ID, ObjectType, Field } from 'type-graphql';
import Task from './Task';
import User from './User';

@ObjectType()
export default class Comment {
  @Field(() => ID)
  id!: string;

  @Field(() => User)
  user!: User;

  @Field(() => String)
  author!: string;

  @Field(() => String)
  content!: string;

  @Field(() => Task)
  task!: Task;

  @Field(() => Boolean)
  isPublished!: boolean;

  @Field(() => String)
  createdAt!: string;
}

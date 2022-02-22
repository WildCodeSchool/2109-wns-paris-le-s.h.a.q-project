import { InputType, Field } from 'type-graphql';
import Task from './Task';
import User from './User';

@InputType()
export default class CreateCommentInput {
  @Field(() => String)
  content!: string;

  @Field(() => String)
  userId!: User;

  @Field(() => String)
  taskId!: Task;

  @Field(() => String)
  createdAt!: string;
}

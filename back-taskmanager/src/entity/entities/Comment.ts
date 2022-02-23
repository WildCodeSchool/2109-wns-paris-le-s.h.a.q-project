import { ID, ObjectType, Field } from 'type-graphql';
import Task from './Task';
import User from './User';

@ObjectType()
class Comment {
  @Field(() => ID)
  _id!: string;

  @Field(() => User)
  author!: User;

  @Field()
  content!: string;

  @Field()
  avatar?: string;

  @Field()
  status?: string;

  @Field(() => Task)
  task?: Task;
}

export default Comment;

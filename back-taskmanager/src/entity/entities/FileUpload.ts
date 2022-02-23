import { ID, ObjectType, Field } from 'type-graphql';
import User from './User';

@ObjectType()
class Comment {
  @Field(() => ID)
  _id!: string;

  @Field()
  name?: string;

  @Field(() => User)
  user!: User;

  @Field()
  userId!: number;

  @Field()
  createDate!: Date;
}

export default Comment;

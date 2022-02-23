import { ID, ObjectType, Field } from 'type-graphql';
import User from './User';

@ObjectType()
class Project {
  @Field(() => ID)
  _id!: string;

  @Field()
  title!: string;

  @Field()
  subject!: string;

  @Field(() => User)
  projectOwner!: User;

  @Field(() => [User])
  members!: User[];

  @Field()
  estimationTime!: number;

  @Field()
  spentTime!: number;

  @Field()
  deadline!: Date;
}

export default Project;

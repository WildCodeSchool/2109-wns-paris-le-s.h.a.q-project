import { ID, ObjectType, Field } from 'type-graphql';
import User from './User';

@ObjectType()
class Project {
  @Field(() => ID)
  id!: string;

  @Field()
  title?: string;

  @Field()
  subject?: string;

  @Field()
  projectOwner?: string;

  @Field(() => [User])
  members?: User[];

  @Field()
  estimationTime?: number;

  @Field()
  spentTime?: number;

  @Field()
  deadline?: string;
}

export default Project;

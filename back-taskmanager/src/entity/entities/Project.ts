/* eslint-disable import/no-cycle */
import { ID, ObjectType, Field } from 'type-graphql';

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

  @Field(() => [ID])
  members?: string[];

  @Field()
  estimationTime?: number;

  @Field()
  spentTime?: number;

  @Field()
  deadline?: string;
}

export default Project;

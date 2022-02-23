import { ID, ObjectType, Field } from 'type-graphql';
import Project from './Project';
import User from './User';

@ObjectType()
export default class Task {
  @Field(() => ID)
  _id!: string;

  @Field()
  subject?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Project)
  project?: Project;

  @Field()
  status?: string;

  @Field()
  priority?: string;

  @Field(() => User)
  assignee!: User;

  @Field()
  initial_time_estimation?: number;

  @Field()
  initial_time_spent?: number;

  @Field()
  advancement?: number;

  @Field()
  deadline!: Date;

  @Field()
  document_upload?: String;
}

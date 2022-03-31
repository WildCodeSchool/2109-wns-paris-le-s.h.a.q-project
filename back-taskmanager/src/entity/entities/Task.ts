/* eslint-disable import/no-cycle */
import { ID, ObjectType, Field } from 'type-graphql';
import Project from './Project';
import User from './User';

@ObjectType()
export default class Task {
  @Field(() => ID)
  id!: string;

  @Field()
  subject?: string;

  @Field()
  description?: string;

  @Field(() => ID)
  project?: Project;

  @Field()
  status?: string;

  @Field({ nullable: true })
  priority?: string;

  @Field(() => ID)
  user?: User;

  @Field()
  initial_time_estimation?: number;

  @Field()
  initial_time_spent?: number;

  @Field()
  advancement?: number;

  @Field()
  deadline?: string;

  /*   @Field()
  document_upload?: String; */
}

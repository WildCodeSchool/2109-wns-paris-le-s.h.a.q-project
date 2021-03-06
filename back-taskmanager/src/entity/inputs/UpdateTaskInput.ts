import { ID, Field, InputType } from 'type-graphql';
import Project from '../entities/Project';
import User from '../entities/User';

@InputType()
export default class UpdateTaskInput {
  @Field()
  subject!: string;

  @Field()
  description!: string;

  @Field(() => ID)
  project!: Project;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  priority?: string;

  @Field(() => ID)
  user!: keyof User;

  @Field({ nullable: true })
  initial_time_estimation?: number;

  @Field({ nullable: true })
  initial_time_spent?: number;

  @Field({ nullable: true })
  advancement?: number;

  @Field({ nullable: true })
  deadline?: string;
}

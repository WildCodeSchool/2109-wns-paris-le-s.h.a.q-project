import { ID, ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Task {
  @Field(() => ID)
  id!: string;

  @Field()
  subject?: string;

  @Field()
  description?: string;

  @Field(() => ID)
  projectId?: string;

  @Field()
  status?: string;

  @Field()
  priority?: string;

/*   @Field(() => ID)
  assigneeId?: string; */

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

import { Field, ID, InputType } from 'type-graphql';

@InputType()
export default class CreateTaskInput {
  @Field()
  subject!: string;

  @Field()
  description!: string;

  @Field(() => ID)
  project!: string;

  @Field()
  status?: string;

  @Field({ nullable: true })
  priority?: string;

  @Field(() => ID)
  user!: string;

  @Field({ nullable: true })
  initial_time_estimation?: number;

  @Field({ nullable: true })
  initial_time_spent?: number;

  @Field({ nullable: true })
  advancement?: number;

  @Field({ nullable: true })
  deadline?: string;

  @Field({ nullable: true })
  author?: string;
  /*   @Field()
  document_upload?: String; */
}

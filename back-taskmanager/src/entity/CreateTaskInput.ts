import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateTaskInput {
  @Field(() => String)
  subject!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => String)
  project!: string;

  @Field(() => String)
  status!: string;

  @Field(() => String)
  assignee!: string;

  @Field(() => String)
  dueDate!: string;
}

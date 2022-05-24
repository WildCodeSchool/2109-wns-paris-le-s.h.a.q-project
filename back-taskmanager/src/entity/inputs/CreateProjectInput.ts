import { Field, ID, InputType } from 'type-graphql';

@InputType()
export default class CreateProjectInput {
  @Field()
  title?: string;

  @Field()
  subject?: string;

  @Field()
  projectOwner?: string;

  @Field(() => [ID], { nullable: true })
  members?: string[];

  @Field()
  estimationTime?: number;

  @Field()
  spentTime?: number;

  @Field()
  deadline?: string;
}

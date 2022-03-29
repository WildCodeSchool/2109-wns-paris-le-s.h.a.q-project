import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateCommentInput {
  @Field(() => String)
  userId!: string;

  @Field(() => String)
  author!: string;

  @Field(() => String)
  content!: string;

  @Field(() => String)
  task!: string;

  /*   @Field(() => String)
  taskId!: string; */

  @Field(() => Boolean)
  isPublished!: boolean;

  @Field(() => String)
  createdAt!: string;
}

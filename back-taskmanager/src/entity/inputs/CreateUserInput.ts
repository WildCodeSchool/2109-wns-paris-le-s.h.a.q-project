import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateUserInput {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  email!: string;

  @Field()
  hash!: string;

  @Field()
  photo?: string;

  @Field()
  role!: string;

  @Field(() => String)
  subscriptionDate!: string;
}
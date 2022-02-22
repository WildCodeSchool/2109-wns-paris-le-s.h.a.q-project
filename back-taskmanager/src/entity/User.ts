import { ID, ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class User {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  role!: string;

  @Field(() => String)
  subscriptionDate!: string;
}

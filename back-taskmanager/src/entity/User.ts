import { ID, ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class User {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  password?: string;

  @Field(() => String)
  role!: string;
}

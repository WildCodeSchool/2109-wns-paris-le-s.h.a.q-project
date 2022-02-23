import { ID, ObjectType, Field } from 'type-graphql';

@ObjectType()
class User {
  @Field(() => ID)
  _id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  email!: string;

  @Field()
  hash!: string;

  @Field()
  photo!: string;

  @Field()
  birthday!: Date;

  @Field()
  role!: string;

  @Field()
  subscriptionDate!: Date;
}

export default User;

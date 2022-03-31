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
  password!: string;

  @Field({ nullable: true })
  photo?: string;

  @Field({ nullable: true })
  role?: string;
}

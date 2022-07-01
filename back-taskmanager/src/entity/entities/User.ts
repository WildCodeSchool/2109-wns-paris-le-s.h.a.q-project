import { ID, ObjectType, Field } from 'type-graphql';
import {prop} from "@typegoose/typegoose";

@ObjectType()
class User {
  @Field(() => ID)
  id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  @prop({unique: true})
  email!: string;

  @Field()
  password!: string;

  // @Field(() => ID)
  // task?: Task;

  @Field({ nullable: true })
  photo?: string;

  @Field({ nullable: true })
  role?: string;
}

export default User;

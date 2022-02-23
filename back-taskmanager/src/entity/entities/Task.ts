import { ID, ObjectType, Field } from 'type-graphql';
import { ObjectId } from "mongoose";

@ObjectType()
export default class Task {
  @Field(() => ID)
  _id!: string;

  @Field()
  subject?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  project?: ObjectId;

  @Field()
  status?: string;

  @Field()
  priority?: string;

  @Field()
  assignee!: ObjectId;

  @Field()
  initial_time_estimation?: number;

  @Field()
  initial_time_spent?: number;

  @Field()
  advancement?: number;

  @Field()
  deadline!: Date;

  @Field()
  document_upload?: String;
}

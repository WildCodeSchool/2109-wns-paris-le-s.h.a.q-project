import { InputType, Field } from 'type-graphql';
import { ObjectId } from 'mongoose';


@InputType()
export default class CreateTaskInput {

  @Field()
  subject?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  project!: ObjectId;

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
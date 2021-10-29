import TaskResolver from 'src/resolvers/TaskResolver';
import { ID, ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Task {
  static find() {
    [Task];
  }

  @Field(() => ID)
  id!: string;

  @Field(() => String)
  subject!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => String)
  project!: string;

  @Field(() => String)
  status!: string;

  @Field(() => String)
  assignee!: string;

  @Field(() => Date)
  dueDate!: Date;
}
// export const TaskModel = getModelForClass(Task);

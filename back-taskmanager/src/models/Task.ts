import { ID, ObjectType, Field } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
@ObjectType()
export default class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: string;

  @Column()
  @Field(() => String)
  subject!: string;

  @Column()
  @Field({ nullable: true })
  description?: string;

  @Column()
  @Field(() => String)
  project!: string;

  @Column()
  @Field(() => String)
  status!: string;

  @Column()
  @Field(() => String)
  assignee!: string;

  @Column()
  @Field(() => Date)
  dueDate!: Date;
}
// export const TaskModel = getModelForClass(Task);

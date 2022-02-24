import { ID, InputType, Field } from 'type-graphql';
import User from "../entities/User";


@InputType()
export default class CreateProjectInput {

    @Field()
    title?: string;
  
    @Field()
    subject?: string;
  
    @Field()
    projectOwner?: string;
  
    @Field(() => [ID], { nullable: true })
    members?: User[];
  
    @Field()
    estimationTime?: number;
  
    @Field()
    spentTime?: number;
  
    @Field()
    deadline?: string;
}
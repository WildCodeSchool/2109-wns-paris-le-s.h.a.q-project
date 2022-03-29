import { InputType, Field } from 'type-graphql';

@InputType()
export default class SearchTaskInput {
  @Field(() => String)
  searchField?: string;
}

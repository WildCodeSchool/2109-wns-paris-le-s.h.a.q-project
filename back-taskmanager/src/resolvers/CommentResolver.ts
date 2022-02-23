/* eslint-disable class-methods-use-this */
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateCommentInput from '../entity/CreateCommentInput';
import CommentModels from '../models/CommentModels';
import Comment from '../entity/Comment';

@Resolver(Comment)
class CommentResolver {
  @Query(() => [Comment])
  async allComments() {
    const comments = await CommentModels.find();
    return comments;
  }

  @Mutation(() => Comment)
  async createComment(
    @Arg('commentInput') createCommentInput: CreateCommentInput
  ): Promise<Comment> {
    const newComment = new CommentModels(createCommentInput);
    await newComment.save();
    return newComment;
  }
}
export default CommentResolver;

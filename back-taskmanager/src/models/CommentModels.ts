import mongoose from 'mongoose';
import { UserData, UserSchema } from './UserModel';
import { TaskData, TaskSchema } from './TaskModels';

export interface CommentData {
  id: string;
  user: UserData;
  author: string;
  content: string;
  task: TaskData;
  isPublished: boolean;
  createdAt: string;
}

const { Schema } = mongoose;
export const CommentSchema = new Schema<CommentData>({
  user: UserSchema,
  author: String,
  content: String,
  task: TaskSchema,
  isPublished: Boolean,
  createdAt: String,
});

export default mongoose.model<CommentData>('comment', CommentSchema);

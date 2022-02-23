import mongoose from 'mongoose';
import { CommentData, CommentSchema } from './CommentModels';
import { UserData, UserSchema } from './UserModel';

export interface TaskData {
  id: string;
  user: UserData;
  subject: string;
  comment: CommentData;
  project: string;
  description: string;
  assignee: string;
  dueDate: string;
  status: string;
}

const { Schema } = mongoose;
export const TaskSchema = new Schema<TaskData>({
  user: UserSchema,
  subject: String,
  comment: CommentSchema,
  project: String,
  description: String,
  assignee: String,
  dueDate: String,
  status: String,
});

export default mongoose.model<TaskData>('task', TaskSchema);

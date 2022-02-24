import mongoose from 'mongoose';
import { CommentData } from './CommentModels';
import { UserData } from './UserModel';

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
const TaskSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  subject: String,
  comment: { type: mongoose.Types.ObjectId, ref: 'Comment' },
  project: String,
  description: String,
  assignee: String,
  dueDate: String,
  status: String,
});

export default mongoose.model<TaskData>('task', TaskSchema);

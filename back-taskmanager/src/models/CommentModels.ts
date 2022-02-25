import mongoose from 'mongoose';
// import { UserData } from './UserModel';
// import { TaskData } from './TaskModels';

// export interface CommentData {
//   id: string;
//   user: UserData;
//   author: string;
//   content: string;
//   task: TaskData;
//   isPublished: boolean;
//   createdAt: string;
// }

const { Schema } = mongoose;
export const CommentSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
  author: String,
  content: String,
  task: { type: mongoose.Types.ObjectId, ref: 'Task' },
  isPublished: Boolean,
  createdAt: String,
});

export default mongoose.model('comment', CommentSchema);

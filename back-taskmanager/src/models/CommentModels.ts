import mongoose from 'mongoose';
import User from '../entity/User';
import Task from '../entity/Task';

interface PostData {
  id: string;
  userId: User;
  author: string;
  content: string;
  task: Task;
  isPublished: boolean;
  createdAt: string;
}

const { Schema } = mongoose;
const PostSchema = new Schema<PostData>({
  id: String,
  userId: String,
  author: String,
  content: String,
  task: Task,
  isPublished: Boolean,
  createdAt: String,
});

export default mongoose.model<PostData>('post', PostSchema);

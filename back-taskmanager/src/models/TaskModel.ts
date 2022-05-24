import mongoose from 'mongoose';
import { UserData } from './UserModel';

interface TaskData {
  id: string | number;
  subject: string;
  description: string;
  project: string;
  status: string;
  priority: string;
  user: string;
  initial_time_estimation: number;
  initial_time_spent: number;
  advancement: number;
  deadline: string;
  author: keyof UserData['email'];
}

const { Schema } = mongoose;
const TaskSchema = new Schema<TaskData>({
  subject: String,
  description: String,
  project: String,
  status: String,
  priority: String,
  user: String,
  initial_time_estimation: Number,
  initial_time_spent: Number,
  advancement: Number,
  deadline: String,
  author: String,
});

export default mongoose.model<TaskData>('task', TaskSchema);

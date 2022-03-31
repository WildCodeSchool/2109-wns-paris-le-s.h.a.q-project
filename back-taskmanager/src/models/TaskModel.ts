import mongoose from 'mongoose';

interface TaskData {
  id: string;
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
});

export default mongoose.model<TaskData>('task', TaskSchema);

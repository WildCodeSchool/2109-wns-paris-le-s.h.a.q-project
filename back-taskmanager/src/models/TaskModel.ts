import mongoose from 'mongoose';

interface TaskData {
  id: string;
  subject: string;
  project: string;
  description: string;
  assignee: string;
  dueDate: string;
  status: string;
}

const { Schema } = mongoose;
const TaskSchema = new Schema<TaskData>({
  subject: String,
  project: String,
  description: String,
  assignee: String,
  dueDate: String,
  status: String,
});

export default mongoose.model<TaskData>('task', TaskSchema);

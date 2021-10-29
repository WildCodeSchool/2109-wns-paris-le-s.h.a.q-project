import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
  subject: String,
  project: String,
  assignee: String,
  dueDate: String,
  status: String,
});
const taskModel = model('task', TaskSchema);

export default taskModel;

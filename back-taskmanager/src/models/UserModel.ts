/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';
import { TaskData, TaskSchema } from './TaskModels';

export interface UserData {
  id: string;
  name: string;
  role: string;
  task: TaskData;
  subscriptionDate: string;
}

const { Schema } = mongoose;
export const UserSchema = new Schema<UserData>({
  id: String,
  name: String,
  role: String,
  task: TaskSchema,
  subscriptionDate: String,
});

export default mongoose.model<UserData>('user', UserSchema);

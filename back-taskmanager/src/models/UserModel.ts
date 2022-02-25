/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';
// import { TaskData } from './TaskModels';

// export interface UserData {
//   id: string;
//   name: string;
//   role: string;
//   task: TaskData;
//   subscriptionDate: string;
// }

const { Schema } = mongoose;
export const UserSchema = new Schema({
  id: String,
  name: String,
  role: String,
  task: { type: mongoose.Types.ObjectId },
  subscriptionDate: String,
});

export default mongoose.model('user', UserSchema);
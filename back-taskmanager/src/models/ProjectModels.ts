/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';
import { UserData, UserSchema } from './UserModel';

export interface ProjectData {
  id: string;
  title: string;
  subject: string;
  projectOwner: UserData;
  members: UserData;
  estimationTime: number;
  spentTime: number;
  deadline: Date;
}

const { Schema } = mongoose;
export const ProjectSchema = new Schema<ProjectData>(
  {
    title: {
      type: String,
      required: true,
    },
    subject: String,
    projectOwner: UserSchema,
    members: UserSchema,
    estimationTime: Number,
    spentTime: Number,
    deadline: Date,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<ProjectData>('project', ProjectSchema);

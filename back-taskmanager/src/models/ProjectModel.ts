/* eslint-disable import/no-cycle */
import mongoose, { Types } from 'mongoose';

export interface ProjectData {
  id: string;
  title: string;
  subject: string;
  projectOwner?: string;
  members: Types.ObjectId;
  estimationTime: number;
  spentTime: number;
  deadline: string;
}

const { Schema } = mongoose;
const ProjectSchema = new Schema<ProjectData>(
  {
/*     id: mongoose.Types.ObjectId, */
    title: {
      type: String,
      required: true,
    },
    subject: String,
    projectOwner: String,
    members: [  
    {  type: mongoose.Types.ObjectId, 
      ref: "User",} ],
    estimationTime: Number,
    spentTime: Number,
    deadline: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<ProjectData>('project', ProjectSchema);

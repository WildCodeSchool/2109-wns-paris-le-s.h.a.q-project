/* eslint-disable import/no-cycle */
import mongoose, { Types } from 'mongoose';

interface ProjectData {
  _id: string;
  title: string;
  subject: string;
  projectOwner: Types.ObjectId;
  members: Types.ObjectId;
  estimationTime: number;
  spentTime: number;
  deadline: Date;
}

const { Schema } = mongoose;
const ProjectSchema = new Schema<ProjectData>(
  {
    _id: mongoose.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    subject: String,
    projectOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true, 
      },
    members: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:true, 
    },
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

/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';

// export interface ProjectData {
//   id: string;
//   title: string;
//   subject: string;
//   projectOwner?: string;
//   members: Types.ObjectId;
//   estimationTime: number;
//   spentTime: number;
//   deadline: string;
// }

const { Schema } = mongoose;
const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: String,
    projectOwner: { type: mongoose.Types.ObjectId, default: null, ref: 'user' },
    members: [
      {  type: mongoose.Types.ObjectId, 
        ref: "user"} ],
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

export default mongoose.model('project', ProjectSchema);

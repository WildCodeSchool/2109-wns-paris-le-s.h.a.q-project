import mongoose, { Types } from 'mongoose';

interface TaskData {
  _id: string;
  subject: string;
  description: string;
  project: Types.ObjectId;
  status: 'unassigned' | 'in progress' | 'done' | 'to validate' | undefined;
  priority: 'low' | 'medium' | 'urgent' | undefined;
  assignee: Types.ObjectId;
  initial_time_estimation?: number;
  advancement?: number;
  deadline: Date;
  document_upload?: string;
}

const { Schema } = mongoose;
const TaskSchema = new Schema<TaskData>(
  {
    _id: mongoose.Types.ObjectId,
    subject: String,
    description: String,
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required:true, 
    },
    status: {
      type: String,
      enum: ['unassigned', 'in progress', 'done', 'other', 'to validate'],
      default: 'unassigned',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'done', 'urgent'],
      default: 'low',
    },
    assignee: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required:true, 
    },
    initial_time_estimation: Number,
    advancement: Number,
    deadline: Date,
    document_upload: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<TaskData>('task', TaskSchema);

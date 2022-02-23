import mongoose, { Types } from 'mongoose';

export interface TaskData {
  id: string;
  subject: string;
  description: string;
  project: string;
  status: 'unassigned' | 'in progress' | 'done' | 'to validate' | undefined;
  priority: 'low' | 'medium' | 'urgent' | undefined;
  assignee: Types.ObjectId;
  initial_time_estimation?: number;
  advancement?: number;
  deadline: Date;
  document_upload?: string;
}

const { Schema } = mongoose;
export const TaskSchema = new Schema<TaskData>(
  {
    subject: String,
    description: String,
    project: String,
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
      required: true,
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

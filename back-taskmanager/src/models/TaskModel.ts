import mongoose, { Types } from 'mongoose';

export interface TaskData {
  id: string;
  subject?: string;
  description?: string;
  projectId?: Types.ObjectId;
  status?: 'unassigned' | 'in progress' | 'done' | 'to validate' | undefined;
  priority?: 'low' | 'medium' | 'urgent' | undefined;
  assigneeId?: Types.ObjectId;
  initial_time_estimation?: number;
  initial_time_spent?: number;
  advancement?: number;
  deadline?: string;
  document_upload?: string;
}

const { Schema } = mongoose;
const TaskSchema = new Schema<TaskData>(
  {
/*     id: mongoose.Types.ObjectId, */
    subject: String,
    description: String,
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'project',
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
    initial_time_estimation: Number,
    initial_time_spent: Number,
    advancement: Number,
    deadline: String,
/*     document_upload: String, */
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<TaskData>('task', TaskSchema);

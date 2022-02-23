/* eslint-disable import/no-cycle */
import mongoose, { Types } from 'mongoose';

export interface CommentData {
  id: string;
  author: Types.ObjectId;
  content: string;
  avatar?: string;
  status: 'draft' | 'published' | 'trashed' | undefined;
  task: Types.ObjectId;
}

const { Schema } = mongoose;
export const CommentSchema = new Schema<CommentData>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: String,
    avatar: String,
    status: {
      type: String,
      enum: ['draft', 'published', 'trashed'],
      default: 'draft',
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: 'Task',
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<CommentData>('comment', CommentSchema);

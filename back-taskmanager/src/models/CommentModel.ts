/* eslint-disable import/no-cycle */
import mongoose, { Types } from 'mongoose';

interface CommentData {
  _id: string;
  author: Types.ObjectId;
  content: string;
  avatar?: string;
  status: 'draft' | 'published' | 'trashed' | undefined;
  task: Types.ObjectId;
}

const { Schema } = mongoose;
const CommentSchema = new Schema<CommentData>(
  {
    _id: mongoose.Types.ObjectId,
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

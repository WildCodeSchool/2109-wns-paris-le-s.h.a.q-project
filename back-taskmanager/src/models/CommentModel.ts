/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';

interface CommentData {
  id: string;
  user: string;
  content: string;
  status: 'draft' | 'published' | 'trashed' | undefined;
  task: string;
  createDate?: Date | string;
}

const { Schema } = mongoose;
const CommentSchema = new Schema<CommentData>(
  {
    user: String,
    content: String,
    task: String,
    createDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['draft', 'published', 'trashed'],
      default: 'draft',
    }
  },
);

export default mongoose.model('comment', CommentSchema);

/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';

// interface CommentData {
//   _id: string;
//   author: Types.ObjectId;
//   content: string;
//   avatar?: string;
//   status: 'draft' | 'published' | 'trashed' | undefined;
//   task: Types.ObjectId;
// }

const { Schema } = mongoose;
const CommentSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    content: String,
    avatar: String,
    status: {
      type: String,
      enum: ['draft', 'published', 'trashed'],
      default: 'draft',
    },
    task: {
      type: mongoose.Types.ObjectId,
      ref: 'task',
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

export default mongoose.model('comment', CommentSchema);

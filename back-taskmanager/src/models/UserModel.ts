/* eslint-disable import/no-cycle */
import mongoose from 'mongoose';

export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  photo?: string;
  role: 'admin' | 'developer' | 'project manager' | 'other' | undefined;
}

const { Schema } = mongoose;
const UserSchema = new Schema<UserData>(
  {
/*     id: mongoose.Types.ObjectId, */
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: String,
    role: {
      type: String,
      enum: ['admin', 'developer', 'project manager', 'other'],
      default: 'draft',
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<UserData>('user', UserSchema);

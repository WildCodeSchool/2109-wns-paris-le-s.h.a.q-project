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
  subscriptionDate: Date;
}

const { Schema } = mongoose;
export const UserSchema = new Schema<UserData>(
  {
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
    subscriptionDate: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

export default mongoose.model<UserData>('user', UserSchema);

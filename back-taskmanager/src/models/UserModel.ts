import mongoose from 'mongoose';

interface UserData {
  id: string;
  email: string;
  password: string;
  role: string;
}

const { Schema } = mongoose;
const UserSchema = new Schema<UserData>({
  id: String,
  email: String,
  password: String,
  role: String,
});

export default mongoose.model<UserData>('user', UserSchema);

import mongoose from 'mongoose';

interface UserData {
  id: string;
  name: string;
  role: string;
  subscriptionDate: string;
}

const { Schema } = mongoose;
const UserSchema = new Schema<UserData>({
  id: String,
  name: String,
  role: String,
  subscriptionDate: String,
});

export default mongoose.model<UserData>('user', UserSchema);

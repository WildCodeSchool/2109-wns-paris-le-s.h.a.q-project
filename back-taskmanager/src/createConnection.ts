import mongoose from 'mongoose';

async function createConnection(uri: string) {
  return mongoose.connect(uri, {
    autoIndex: true,
  });
}
export default createConnection;

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import createConnection from '../createConnection';

let mongoServer: MongoMemoryServer;
let db: typeof mongoose;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  db = await createConnection(mongoUri);
});

beforeEach(async () => {
  await db.connection.collection('tasks').deleteMany({});
});

afterAll(async () => {
  await db.connection.close();
  await mongoServer.stop();
});

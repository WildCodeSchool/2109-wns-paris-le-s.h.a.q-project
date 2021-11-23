import { ApolloServer, gql } from 'apollo-server';
import createServer from '../createServer';
import TaskModel from '../models/TaskModels';

let server: ApolloServer;

beforeAll(async () => {
  server = await createServer();
});

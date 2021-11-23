import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import TaskResolver from './resolvers/TaskResolver';

async function createServer() {
  const schema = await buildSchema({
    resolvers: [TaskResolver], // add this
  });
  const server = new ApolloServer({ schema });
  return server;
}
createServer();

export default createServer;

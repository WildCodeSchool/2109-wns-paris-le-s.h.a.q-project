import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import TaskResolver from './resolvers/TaskResolver'; // add this

async function main() {
  await createConnection();
  const schema = await buildSchema({
    resolvers: [TaskResolver], // add this
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server has started!');
}
main();

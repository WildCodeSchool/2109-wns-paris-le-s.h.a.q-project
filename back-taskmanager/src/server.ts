/* import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import TaskResolver from './resolvers/TaskResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [TaskResolver], // add this
  });
  // Create the GraphQL server
  const server = new ApolloServer({ schema });

  return server;
}

export default main;
 */

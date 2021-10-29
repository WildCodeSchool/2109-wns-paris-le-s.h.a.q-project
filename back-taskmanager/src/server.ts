import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import TaskResolver from './resolvers/TaskResolver';

const mongoose = require('mongoose'); // add this

mongoose
  .connect('mongodb://127.0.0.1:27017/task_manager', {
    autoIndex: true,
  })
  .then(() => console.log('Connected to database'))
  .catch((err: any) => console.log(err));

async function main() {
  const schema = await buildSchema({
    resolvers: [TaskResolver], // add this
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server has started!');
}
main();

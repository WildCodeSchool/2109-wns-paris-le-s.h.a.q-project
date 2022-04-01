/* eslint-disable no-console */
import 'reflect-metadata';

import createConnection from './createConnection';
import createServer from './createServer';

async function start() {
  try {
    console.log('awaiting for database connection');
    await createConnection('mongodb://mongodb:27017/task_manager');
    console.log('connected to database');
    const server = await createServer();
    console.log('create server ok');

    // Start the server
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err: unknown) {
    console.log(err);
  }
}

start();

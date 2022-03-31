import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import jwt, { JwtPayload } from 'jsonwebtoken';

import TaskResolver from './resolvers/TaskResolver';
import CommentResolver from './resolvers/CommentResolver';
import UserResolver from './resolvers/UserResolver';
import ProjectResolver from './resolvers/ProjectResolver';
import LoginResolver from './resolvers/LoginResolver';

export const jwtKey = 'my_secret_key_that_must_be_very_long';

async function createServer() {
  const schema = await buildSchema({
    resolvers: [
      TaskResolver,
      CommentResolver,
      UserResolver,
      ProjectResolver,
      LoginResolver,
    ], // add this
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      // console.log(req.headers.authorization);
      const token = req.headers.authorization;
      if (token) {
        let payload: JwtPayload;
        try {
          payload = jwt.verify(token, jwtKey) as JwtPayload;
          return { authenticatedUserEmail: payload.user };
        } catch (err) {
          console.log('err', err);
          return {};
        }
      } else return {};
    },
  });
  return server;
}
createServer();

export default createServer;

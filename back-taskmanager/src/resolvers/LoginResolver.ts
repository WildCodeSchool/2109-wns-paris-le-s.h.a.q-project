/* eslint-disable class-methods-use-this */
import bcrypt from 'bcryptjs';
import { ApolloError } from 'apollo-server';
import { Resolver, Query, Arg } from 'type-graphql';
import jwt from 'jsonwebtoken';
import { jwtKey } from '../createServer';

const usersDB = [
  {
    email: 'admin@gmail.com',
    hash: bcrypt.hashSync('p4ssw0rd', 10),
  },
];
@Resolver()
export default class LoginResolver {
  @Query(() => String)
  login(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): string {
    const user = usersDB.find((dbUser) => dbUser.email === email);
    if (user && bcrypt.compareSync(password, user.hash)) {
      const token = jwt.sign(
        {
          user: user.email,
        },
        jwtKey
      );
      return token;
    }
    throw new ApolloError('Invalid credentials');
  }
}

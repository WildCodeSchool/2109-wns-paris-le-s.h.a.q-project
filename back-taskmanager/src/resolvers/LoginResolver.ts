/* eslint-disable class-methods-use-this */
import bcrypt from 'bcryptjs';
import { ApolloError } from 'apollo-server';
import { Resolver, Query, Arg } from 'type-graphql';
import jwt from 'jsonwebtoken';
// eslint-disable-next-line import/no-cycle
import { jwtKey } from '../createServer';
import UserModel from '../models/UserModel';

@Resolver()
export default class LoginResolver {
  @Query(() => String)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<string> {
    const user = await UserModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          user: user.email,
        },
        jwtKey as string
      );
      return token;
    }
    throw new ApolloError('Identifiant ou mot de passe incorrect');
  }
}

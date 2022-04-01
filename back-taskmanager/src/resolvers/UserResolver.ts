/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import bcrypt from 'bcryptjs';
import { Resolver, Query, Mutation, Arg, UseMiddleware } from 'type-graphql';
import CreateUserInput from '../entity/inputs/CreateUserInput';
import User from '../entity/entities/User';
import UserModel from '../models/UserModel';
import logger from '../modules/middleware/logger';

@Resolver(User)
class UserResolver {
  @UseMiddleware(logger)
  @Query(() => [User])
  async allUsers() {
    const users = await UserModel.find();
    return users;
  }

  @Mutation(() => User)
  async createUser(@Arg('input') createUserInput: CreateUserInput) {
    try {
      const newUser = new UserModel({
        ...createUserInput,
        password: bcrypt.hashSync(createUserInput.password, 10),
      });
      await newUser.save();
      console.log('newUser', newUser);
      return newUser;
    } catch (err) {
      return console.log(err);
    }
  }
}
export default UserResolver;

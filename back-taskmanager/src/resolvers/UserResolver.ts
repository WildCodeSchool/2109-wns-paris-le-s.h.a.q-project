/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import bcrypt from "bcryptjs";
import { Arg, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import jwt from "jsonwebtoken";
import CreateUserInput from "../entity/inputs/CreateUserInput";
import User from "../entity/entities/User";
import UserModel from "../models/UserModel";
import logger from "../modules/middleware/logger";
import UpdateUserInput from "../entity/inputs/UpdateUserInput";
import {jwtKey} from "../createServer";

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async allUsers() {
    const users = await UserModel.find();
    return users;
  }

  @Mutation(() => String)
  async createUser(@Arg('input') createUserInput: CreateUserInput) {
    try {
      const newUser = new UserModel({
        ...createUserInput,
        password: bcrypt.hashSync(createUserInput.password, 10),
      });
      await newUser.save();
      const token = jwt.sign(
          {
            user: newUser.email,
          },
          jwtKey as string
      );
      return token;

    } catch (err) {
      return console.log(err);
    }
  }

  @Mutation(() => User)
  async updateUser(@Arg('id') _id: string, @Arg('data') data: UpdateUserInput) {
    const user = await UserModel.findOne({ _id }).exec();
    if (!user) throw new Error('Task not found!');
    if (user !== null && user !== undefined) {
      Object.assign(user, data);
      await user.save();
    }
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('id') _id: string) {
    const user = await UserModel.findOne({ _id }).exec();
    if (!user) throw new Error('Utilisateur non trouvé!');
    if (user !== null && user !== undefined) {
      await user.remove();
    }
    return true;
  }
}

export default UserResolver;

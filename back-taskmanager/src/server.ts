import "reflect-metadata";

const { ApolloServer } = require("apollo-server");
const {buildSchema} = require('type-graphql');
const mongoose = require("mongoose");
const TaskResolver = require("./resolvers/TaskResolver");

// Database
mongoose
  .connect("mongodb://127.0.0.1:27017/taskmanagerdb", {
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err: any) => console.log(err));


async function start() {
  const schema = await buildSchema({
    resolvers: [TaskResolver]
  })
  const server = new ApolloServer({ schema })
  await server.listen(4000)
  console.log("Server has started!")
}

start();
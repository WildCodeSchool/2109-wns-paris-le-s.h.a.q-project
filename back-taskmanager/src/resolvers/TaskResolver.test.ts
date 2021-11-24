import { ApolloServer, gql } from 'apollo-server';
// import { isType } from 'graphql';
import createServer from '../createServer';
import TaskModel from '../models/TaskModels';

let server: ApolloServer;

beforeAll(async () => {
  server = await createServer();
});

describe('Task Resolver', () => {
  describe('mutation createTask', () => {
    it('add a new task to database', async () => {
      const createTaskMutation = gql`
        mutation CreateTask($input: CreateTaskInput!) {
          createTask(input: $input) {
            _id
            subject
            project
          }
        }
      `;

      const variables = {
        input: { subject: 'Database', project: 'Task Manager' },
      };

      const res = await server.executeOperation({
        query: createTaskMutation,
        variables,
      });

      const taskFromResponse = res.data?.createTask;

      expect(taskFromResponse).toEqual(
        expect.objectContaining({
          subject: 'Database',
          project: 'Task Manager',
        })
      );

      const taskInDb = await TaskModel.findById(taskFromResponse._id);
      expect(taskInDb?.subject).toBe(taskFromResponse.subject);
    });
  });

  describe('get all tasks', () => {
    it('returns all tasks from database', async () => {
      const task1Data = {
        subject: 'Front',
        project: 'Task Manager',
        description: 'blablabla',
        assignee: 'sofiane',
        dueDate: '24/12/21',
        status: 'to do',
      };
      const task2Data = {
        subject: 'Back',
        project: 'Task Manager',
        description: 'blablabla',
        assignee: 'houra',
        dueDate: '29/11/21',
        status: 'doing',
      };
      const task1InDb = new TaskModel(task1Data);
      const task2InDb = new TaskModel(task2Data);
      await task1InDb.save();
      await task2InDb.save();

      const allTasksQuery = gql`
        query allTasks {
          allTasks {
            _id
            subject
            project
          }
        }
      `;
      const res = await server.executeOperation({
        query: allTasksQuery,
      });
      expect(res.data?.allTasks).toEqual([
        expect.objectContaining(task1Data),
        expect.objectContaining(task2Data),
      ]);

      expect(res.data?.allTasks[0]._id).toBe(task1InDb._id.toString());
    });
  });
});

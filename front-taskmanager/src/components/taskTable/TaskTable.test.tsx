import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { TaskTable, GET_TASK } from './TaskTable';

const mocks = [
  {
    request: {
      query: GET_TASK,
      variables: {
        subject: 'Front',
        project: 'Task Manager',
        description: 'blablabla',
        assignee: 'sofiane',
        dueDate: '24/12/21',
        status: 'to do',
      },
    },
    result: {
      data: {
        allTasks: [
          {
            subject: 'Front',
            project: 'Task Manager',
            description: 'blablabla',
            assignee: 'sofiane',
            dueDate: '24/12/21',
            status: 'to do',
          },
        ],
      },
    },
  },
];

it('renders without error', async () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TaskTable data={data} />
    </MockedProvider>
  );

  const tree = await component.toJSON();
  console.log(tree);

  expect(tree.children).toContain('Loading...');
});

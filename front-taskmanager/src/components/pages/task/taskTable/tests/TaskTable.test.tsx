import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { GraphQLError } from 'graphql/error/GraphQLError';
import { TaskTable } from 'components/pages/task';
import ITaskData from '../../../../../interfaces/task/ITaskData';

describe('fetch all task in TaskTable', () => {
  it('verify if its loading', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <TaskTable data={undefined} refetch={undefined} />
      </MockedProvider>
    );
    expect(screen.queryByText(/Loading/i)).toBeInTheDocument();
  });

  it('test if all tasks are displayed ', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_TASK,
            },
            result: {
              data: {
                allTasks: [
                  {
                    id: '619e44bcd36de6c62c775386',
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
        ]}
        addTypename={false}
      >
        <TaskTable />
      </MockedProvider>
    );

    const element = await waitFor(() => screen.getByText('Front'));
    expect(element).toBeInTheDocument();
    // expect(res.data?.allTasks[0].subject).toBe(allTasks[0].subject.toString());
  });

  it('verify if there is an error', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: GET_TASK,
            },
            result: {
              errors: [new GraphQLError('Error!')],
            },
          },
        ]}
        addTypename={false}
      >
        <TaskTable />
      </MockedProvider>
    );

    const element = await waitFor(() => screen.getByText('Error :('));
    expect(element).toBeInTheDocument();
  });
});

import React from 'react';
import TestRenderer from 'react-test-renderer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { MockedProvider } from '@apollo/client/testing';
import { TaskTable, GET_TASK } from './TaskTable';
import ITaskData from '../../interfaces/ITaskData';

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
      <TableBody>
        {data.allTasks.map((row: ITaskData) => (
          <TableRow
            key={row.subject}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.subject}
            </TableCell>
            <TableCell align="right">{row.project}</TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.assignee}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MockedProvider>
  );

  const tree = await component.toJSON();
  console.log(tree);

  expect(tree.children).toContain('Loading...');
});

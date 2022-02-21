import React from 'react';
import TaskInput from './taskInput/TaskInput';
import TaskTable from './taskTable/TaskTable';
import { useQuery } from '@apollo/client';
import TasksQuery from '../../graphql/task/TasksQuery';

const Task = () => {
  const { loading, error, data, refetch } = useQuery(TasksQuery);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <>
      <TaskTable data={data.allTasks} />
      <TaskInput refetch={refetch} />
    </>
  );
};

export default Task;

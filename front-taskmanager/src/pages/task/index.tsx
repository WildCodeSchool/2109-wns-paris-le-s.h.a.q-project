import React from 'react';
import TaskTable from 'components/pages/task/taskTable';
import { useQuery } from '@apollo/client';
import TasksQuery from 'graphql/task/TasksQuery';
import { Container, Grid } from '@material-ui/core';

const Task = () => {
  const { loading, error, data, refetch } = useQuery(TasksQuery);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item style={{ width: '100%' }}>
          <TaskTable data={data.allTasks} refetch={refetch} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Task;

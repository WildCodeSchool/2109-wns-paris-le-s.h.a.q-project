import React from 'react';
import { useQuery } from '@apollo/client';
import TasksQuery from 'graphql/task/TasksQuery';
import { Container, Grid } from '@material-ui/core';
import TaskTable from 'components/pages/task/taskTable';

const Task = () => {
  const { loading, error, data, refetch } = useQuery(TasksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :`${error}`</p>;

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

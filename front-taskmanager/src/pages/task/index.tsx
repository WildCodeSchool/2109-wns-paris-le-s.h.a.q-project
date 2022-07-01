import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import TasksQuery from 'graphql/task/TasksQuery';
import TaskTable from 'components/pages/task/taskTable';
import {
  Backdrop, Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import {useNavigate} from "react-router-dom";
import ButtonNavigateToHome from "../../components/shared/ButtonNavigateToHome";

const Task = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/', { replace: true });
        }
    })


    const { loading, error, data, refetch } = useQuery(TasksQuery);
  if (loading) {
    return (
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  if (error) {
    return (
        <>
          <Typography variant="body1" component="p">
            {error.message}
          </Typography>
  <ButtonNavigateToHome />

        </>
    );
  }
  return (
    <div>
      <Container>
        <Grid container justifyContent="center">
          <Grid item style={{ width: '100%' }}>
            <TaskTable data={data.allTasks} refetch={refetch} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Task;

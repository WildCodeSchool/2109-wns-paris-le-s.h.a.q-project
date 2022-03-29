import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { useMutation } from '@apollo/client';
import CreateTaskMutation from 'graphql/task/CreateTaskMutation';
import { ICreateTask, IAddTaskForm } from 'interfaces';
import TaskInput from './TaskInput';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@material-ui/core';

const styled = {
  input: {
    mx: 2,
    my: 1,
  },
};

const AddTaskForm = ({ refetch, handleCloseAddTask }: IAddTaskForm) => {
  const { control, handleSubmit, reset } = useForm<ICreateTask>({
    mode: 'onChange',
  });

  const [
    addTask,
    { data: dataOnAdd, loading: loadingOnAdd, error: errorOnAdd },
  ] = useMutation(CreateTaskMutation);
  if (loadingOnAdd)
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  else if (errorOnAdd)
    return (
      <Typography variant="body1" component={'span'}>
        `Erreur dans le formulaire! ${errorOnAdd.message}`
      </Typography>
    );
  else {
    const submitForm = async (input: ICreateTask) => {
      reset();
      await addTask({ variables: { input: input } });
      refetch();
      handleCloseAddTask();
    };

    return (
      <form id="test" onSubmit={handleSubmit(submitForm)}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Grid item justifyContent="space-around">
            <TaskInput
              control={control}
              name="subject"
              label="Subject"
              type="text"
              styled={styled.input}
            />
            <TaskInput
              control={control}
              name="project"
              label="Project"
              type="text"
              styled={styled.input}
            />
          </Grid>

          <Grid item justifyContent="space-around">
            <TaskInput
              control={control}
              name="status"
              label="Status"
              type="text"
              styled={{ width: '31.3%', my: 1 }}
            />
            <TaskInput
              control={control}
              name="assignee"
              label="Assignee"
              type="text"
              styled={{ width: '31.3%', mx: 2, my: 1 }}
            />
            <TaskInput
              control={control}
              name="dueDate"
              label=""
              type="date"
              styled={{ width: '31.3%', my: 1 }}
            />
          </Grid>
          <Grid item justifyContent="center" width="100%">
            <TaskInput
              control={control}
              name="description"
              label="Description"
              type="text"
              styled={{ my: 1, width: '100%' }}
            />
          </Grid>
        </Grid>
      </form>
    );
  }
};

export default AddTaskForm;

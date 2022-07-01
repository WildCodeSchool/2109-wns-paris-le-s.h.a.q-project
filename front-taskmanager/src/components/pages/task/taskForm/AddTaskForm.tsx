import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography } from '@mui/material';
import { useMutation } from '@apollo/client';
import CreateTaskMutation from 'graphql/task/CreateTaskMutation';
import { IAddTaskForm, ICreateTask } from 'interfaces';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import TaskInput from './TaskInput';

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
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  if (errorOnAdd)
    return (
      <Typography variant="body1" component="span">
        `Erreur dans le formulaire! ${errorOnAdd.message}`
      </Typography>
    );
  
    const submitForm = async (input: ICreateTask) => {
      reset();
      await addTask({ variables: { input } });
      refetch();
      handleCloseAddTask();
    };

    return (
      <form id="addTask" onSubmit={handleSubmit(submitForm)}>
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
              label="Sujet"
              type="text"
              styled={styled.input}
            />
            <TaskInput
              control={control}
              name="project"
              label="Projet"
              type="text"
              styled={styled.input}
            />
          </Grid>

          <Grid item justifyContent="space-around">
            <TaskInput
              control={control}
              name="status"
              label="Statut"
              type="text"
              styled={{ width: '31.3%', my: 1 }}
            />
            <TaskInput
              control={control}
              name="user"
              label="Utilisateur"
              type="text"
              styled={{ width: '31.3%', mx: 2, my: 1 }}
            />
            <TaskInput
              control={control}
              name="deadline"
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
  
};

export default AddTaskForm;

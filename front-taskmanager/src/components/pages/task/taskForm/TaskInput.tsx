import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
import { useMutation } from '@apollo/client';
import CreateTaskMutation from 'graphql/task/CreateTaskMutation';
import { Subject } from '@material-ui/icons';
import { ICreateTask, ITaskInput } from 'interfaces';
import ButtonAdd from 'components/shared/ButtonAdd';

const styled = {
  input: {
    mx: 2,
    my: 1,
  },
};

const TaskInput = ({ refetch, handleCloseAddTask }: ITaskInput) => {
  const { control, handleSubmit, reset } = useForm<ICreateTask>({
    mode: 'onChange',
  });

  const [
    addTask,
    { data: dataOnAdd, loading: loadingOnAdd, error: errorOnAdd },
  ] = useMutation(CreateTaskMutation);
  if (loadingOnAdd) return 'Submitting...';
  if (errorOnAdd) return `Submission error! ${errorOnAdd.message}`;

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
          <Controller
            control={control}
            name="subject"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="subject"
                label="Subject"
                type="text"
                sx={styled.input}
              />
            )}
          />
          <Controller
            control={control}
            name="project"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="project"
                label="Project"
                type="text"
                sx={styled.input}
              />
            )}
          />
        </Grid>
        <Grid item justifyContent="space-around">
          <Controller
            control={control}
            name="status"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="status"
                label="Status"
                type="text"
                sx={{ width: '30%', my: 1 }}
              />
            )}
          />
          <Controller
            control={control}
            name="assignee"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="assignee"
                label="Assignee"
                type="text"
                sx={{ width: '30%', mx: 2, my: 1 }}
              />
            )}
          />
          <Controller
            control={control}
            name="dueDate"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="dueDate"
                type="date"
                sx={{ width: '30%', my: 1 }}
              />
            )}
          />
        </Grid>
        {/* <Grid item justifyContent="center"> */}
        {/* <Controller
            control={control}
            name="description"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="description"
                label="Description"
                type="text"
                sx={styled.input}
              />
            )}
          /> */}
        {/* <Button
            type="submit"
            style={{ marginTop: 15, outline: '1px solid #6495ed' }}
          >
            Créer nouvelle tâche
          </Button> */}
        {/* <ButtonAdd title="Confirmer l'ajout de cette tâche" />
        </Grid> */}
        {/* <Grid item xs={12}>
            
        </Grid> */}
      </Grid>
    </form>
  );
};

export default TaskInput;

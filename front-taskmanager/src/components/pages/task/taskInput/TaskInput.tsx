import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
import { useMutation } from '@apollo/client';
import CreateTaskMutation from 'graphql/task/CreateTaskMutation';
import { Subject } from '@material-ui/icons';
import { ICreateTask, ITaskInput } from 'interfaces';

const styled = {
  input: {
    mx: 4,
    my: 2,
  },
};

const TaskInput = ({ refetch }: ITaskInput) => {
  const [addTask, { data, loading, error }] = useMutation(CreateTaskMutation);

  const { control, handleSubmit, reset } = useForm<ICreateTask>({
    mode: 'onChange',
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const submitForm = async (input: ICreateTask) => {
    reset();
    await addTask({ variables: { input: input } });
    refetch();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Grid container justifyContent="center" direction="row">
        <Grid item>
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
                sx={styled.input}
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
                sx={styled.input}
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
                label="Due Date"
                type="text"
                sx={styled.input}
              />
            )}
          />
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
        </Grid>
        {/* <Grid item xs={12}>
            
        </Grid> */}
      </Grid>

      <Button type="submit">Créer nouvelle tâche</Button>
    </form>
  );
};

export default TaskInput;

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';
import { useMutation } from '@apollo/client';
import CreateTaskMutation from '../../../graphql/task/CreateTaskMutation';

interface ICreateTask {
  subject: string;
  project: string;
  assignee: string;
  description: string;
  dueDate: string;
  status: string;
}
interface ITaskInput {
  refetch: () => void;
}

const styled = {
  mx: 4,
  my: 2,
};

const TaskInput = ({ refetch }: ITaskInput) => {
  const [addTask, { data, loading, error }] = useMutation(CreateTaskMutation);

  const { control, handleSubmit } = useForm<ICreateTask>({
    mode: 'onChange',
  });

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const submitForm = (input: ICreateTask) => {
    addTask({ variables: { input: input } });
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
                sx={styled}
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
                sx={styled}
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
                sx={styled}
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
                sx={styled}
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
                sx={styled}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="description"
                label="Description"
                type="text"
                sx={styled}
              />
            )}
          />
        </Grid>
        {/* <Grid item xs={12}>
            
        </Grid> */}
      </Grid>

      <Button type="submit">Créer nouvelle tâche</Button>
    </form>
  );
};

export default TaskInput;

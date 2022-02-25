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

  return <form onSubmit={handleSubmit(submitForm)}></form>;
};

export default TaskInput;

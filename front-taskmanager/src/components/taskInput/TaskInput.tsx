import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

interface ITaskInput {
  subject: string;
  project: string;
  assignee: string;
  description: string;
  dueDate: string;
  status: string;
}

export default function TaskInput() {
  const { control, handleSubmit } = useForm<ITaskInput>({
    mode: 'onChange',
  });

  const submitForm = (data: ITaskInput) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Controller
        control={control}
        name="subject"
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} id="subject" label="Subject" type="text" />
        )}
      />

      <Controller
        control={control}
        name="project"
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} id="project" label="Project" type="text" />
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
          />
        )}
      />

      <Controller
        control={control}
        name="assignee"
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} id="assignee" label="Assignee" type="text" />
        )}
      />

      <Controller
        control={control}
        name="dueDate"
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} id="dueDate" label="Due Date" type="text" />
        )}
      />
      <Controller
        control={control}
        name="status"
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} id="status" label="Status" type="text" />
        )}
      />

      {/* <TextField inputRef={register} name="subject" label="Subject" type="text"/>
      <TextField inputRef={register} name="project" label="Project" type="text"/>
      <TextField inputRef={register} name="description" label="Description" type="text"/>
      <TextField inputRef={register} name="assignee" label="Assignee" type="text"/>
      <TextField inputRef={register} name="dueDate" label="Due date" type="text"/>
      <TextField inputRef={register} name="status" label="Status" type="text"/> */}
      <Button type="submit">Create Task</Button>
    </form>
  );
}

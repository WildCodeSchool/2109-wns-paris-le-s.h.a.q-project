import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ITaskInput } from 'interfaces';

const TaskInput = ({ control, name, label, type, styled }: ITaskInput) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id={name}
            label={label}
            type={type}
            sx={styled}
          />
        )}
      />
    </>
  );
};

export default TaskInput;

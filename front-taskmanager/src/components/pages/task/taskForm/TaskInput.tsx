import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { ITaskInput } from 'interfaces';

const TaskInput = ({ control, name, label, type, styled, error, helperText,fullWidth  }: ITaskInput) => (
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
            error={error}
            helperText={helperText}
            variant="outlined"
            fullWidth={fullWidth}

          />
        )}
      />
    </>
  );

export default TaskInput;

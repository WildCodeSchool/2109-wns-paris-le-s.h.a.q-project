import React, {ReactNode} from 'react'
import {Control, Controller, FieldValues} from 'react-hook-form'
import {SxProps, TextField} from '@mui/material';
import {Theme} from "@mui/system";

interface IErrors {
    firstName: {
        message: string
    },
    lastName: {
        message: string
    },
    email: {
        message: string
    },
    password: {
        message: string
    },
    confirmPassword: {
        message: string
    },


}
interface ITextFieldInput {
    name: any;
    label: string;
    control: any;
    errors: IErrors;
    id: string | undefined;
    children: ReactNode;
    minRows: number;
    maxRows: number;
    multiline: boolean;
    select: boolean;
    fullWidth: boolean;
    sx: SxProps<Theme> | undefined;
}

const TextFieldInput = ({
                            name,
                            label,
                            control,
                            errors,
                            id = undefined,
                            children = null,
                            minRows = 1,
                            maxRows = 1,
                            multiline = false,
                            select = false,
                            fullWidth = true,
                            sx = undefined
                        }: ITextFieldInput) => (
        <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    id={id || name}
                    label={label}
                    minRows={minRows}
                    maxRows={maxRows}
                    multiline={multiline}
                    type="text"
                    error={Boolean(errors)}
                    helperText={errors}
                    fullWidth={fullWidth}
                    autoFocus
                    color="primary"
                    select={select}
                    sx={sx}
                >
                    {children}
                </TextField>
            )}
        />
    )
export default TextFieldInput
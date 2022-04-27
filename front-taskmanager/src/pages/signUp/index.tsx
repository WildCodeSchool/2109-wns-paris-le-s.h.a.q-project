import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import '../../style/signUp.css';
import { gql, useMutation } from '@apollo/client';
import TextField from '@mui/material/TextField';

interface ISignUnInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const SIGNUP = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      firstName
      lastName
      email
      password
    }
  }
`;

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUnInput>();
  const [createUser, { loading, error, data }] = useMutation(SIGNUP);
  const navigate = useNavigate();

  const submitForm = async (dataForm: ISignUnInput) => {
    await createUser({
      variables: { createUserInput: dataForm },
    });
    navigate('/');
  }; // form submit function which will invoke after successful validation

  return (
    <>
      <h1>Sign Up page</h1>
      <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField {...field} id="firstName" label="First Name" />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField {...field} id="lastName" label="Last Name" />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              type="email"
              {...field}
              id="email"
              label="Email Address"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              type="password"
              id="password"
              label="password"
              {...field}
            />
          )}
        />
        {/* <section> */}
        {/*  <label>First Name</label> */}
        {/*  <input */}
        {/*    {...register('firstName', { */}
        {/*      required: true, */}
        {/*      maxLength: 20, */}
        {/*      pattern: /^[A-Za-z]+$/i, */}
        {/*    })} */}
        {/*  /> */}
        {/*  {errors?.firstName?.type === 'required' && ( */}
        {/*    <p>This field is required</p> */}
        {/*  )} */}
        {/*  {errors?.firstName?.type === 'maxLength' && ( */}
        {/*    <p>First name cannot exceed 20 characters</p> */}
        {/*  )} */}
        {/*  {errors?.firstName?.type === 'pattern' && ( */}
        {/*    <p>Alphabetical characters only</p> */}
        {/*  )} */}
        {/*  <label>Last Name</label> */}
        {/*  <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} /> */}
        {/*  {errors?.lastName?.type === 'pattern' && ( */}
        {/*    <p>Alphabetical characters only</p> */}
        {/*  )} */}
        {/*  <label htmlFor="email">email</label> */}
        {/*  <input */}
        {/*    id="email" */}
        {/*    defaultValue="testttttttttt" */}
        {/*    aria-invalid={errors.email ? 'true' : 'false'} */}
        {/*    {...register('email', { */}
        {/*      required: 'required', */}
        {/*      pattern: { */}
        {/*        value: /\S+@\S+\.\S+/, */}
        {/*        message: 'Entered value does not match email format', */}
        {/*      }, */}
        {/*    })} */}
        {/*    type="email" */}
        {/*    placeholder="example@mail.com" */}
        {/*  /> */}
        {/*  <label htmlFor="password">password</label> */}
        {/*  <input */}
        {/*    id="password" */}
        {/*    defaultValue="" */}
        {/*    aria-invalid={errors.password ? 'true' : 'false'} */}
        {/*    {...register('password', { */}
        {/*      required: 'required', */}
        {/*      minLength: { */}
        {/*        value: 5, */}
        {/*        message: 'min length is 5', */}
        {/*      }, */}
        {/*    })} */}
        {/*    type="password" */}
        {/*    placeholder="password" */}
        {/*  /> */}
        {/* </section> */}
        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};

export default SignUp;

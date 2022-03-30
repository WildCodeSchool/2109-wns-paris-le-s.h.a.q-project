import React from 'react';
import bcrypt from 'bcryptjs';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { gql, useLazyQuery } from '@apollo/client';
import login from '../../../../back-taskmanager/src/resolvers/LoginResolver';

interface ISignInInput {
  email: string;
  password: string;
}

const LOGIN = gql`
  query Login($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;

export default function SignInForm() {
  const { control, handleSubmit } = useForm<ISignInInput>({
    mode: 'onChange',
  });

  const [login, { loading, error, data }] = useLazyQuery(LOGIN);

  const submitForm = ({ email, password }: ISignInInput) => {
    // const hashData = {
    //   ...dataForm,
    //   password: bcrypt.hashSync(dataForm.password, 10),
    // };
    password = bcrypt.hashSync(password, 10);
    console.log(email, password);

    login({
      variables: { email: email, password: password },
    });
    console.log(
      'data on submit',
      login({ variables: { email: email, password: password } })
    );
    console.log('dataOnSubmit', data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} id="email" label="Email" type="email" />
        )}
      />

      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            id="password"
            label="Mot de passe"
            type="password"
          />
        )}
      />

      <Button type="submit">Se connecter</Button>
    </form>
  );
}

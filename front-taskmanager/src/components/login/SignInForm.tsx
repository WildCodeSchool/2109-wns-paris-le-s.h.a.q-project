import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { gql, useLazyQuery } from '@apollo/client';

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

  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :`${error}`</p>;
  if (data) {
    localStorage.setItem('token', data.login);
  }

  const submitForm = (dataForm: ISignInInput) => {
    getLogin({
      variables: { ...dataForm },
    });
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

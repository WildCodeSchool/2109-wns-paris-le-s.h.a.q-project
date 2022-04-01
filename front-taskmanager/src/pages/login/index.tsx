import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { gql, useLazyQuery } from '@apollo/client';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
      marginTop: theme.spacing(10)
    }
  })
);


interface ISignInInput {
  email: string;
  password: string;
}

const LOGIN = gql`
  query Login($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;

const Login = () => {
  const classes = useStyles();
  const { control, register, handleSubmit, formState: { errors } } = useForm<ISignInInput>({
    mode: 'onChange',
  });

  // const {
  //   control,
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset
  // } = useForm<ISignInInput>();

  // const onSubmit = async (data) => {
  //   await login(data.email, data.password);
  //   reset();
  // };

  console.log(errors);
  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN);


  const submitForm = (dataForm: ISignInInput) => {
    getLogin({
      variables: { ...dataForm },
    });
  };



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :`${error}`</p>;
  if (data) {
    localStorage.setItem('token', data.login);
  }


  return (
    <form onSubmit={handleSubmit(submitForm)} className={classes.container} autoComplete="off" >
      <section>
      <h1>Login</h1>
      <label htmlFor="email">email</label>
        <input
          id="email"
          defaultValue=""
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })}
          type="email"
          placeholder="example@mail.com"
        />
      {errors.email && <span role="alert">{errors.email.message}</span>}

        <label htmlFor="password">password</label>
        <input
          id="password"
          defaultValue=""
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5"
            }
          })}
          type="password"
          placeholder="password"
        />
        {errors.password && <span role="alert">{errors.password.message}</span>}

    <Button type="submit">Se connecter</Button>
      </section>
      <button type="submit">SUBMIT</button>
  </form>
  );
}

export default Login;









//  {/* <form onSubmit={handleSubmit(submitForm)} className={classes.container} noValidate autoComplete="off">
//       <Controller
//         control={control}
//         name="email"
//         defaultValue=""
//         render={({ field }) => (
//           <TextField {...field} id="email" label="Email" type="email" />
//         )}
//       />

//       <Controller
//         control={control}
//         name="password"
//         defaultValue=""
//         render={({ field }) => (
//           <TextField
//             {...field}
//             id="password"
//             label="Mot de passe"
//             type="password"
//           />
//         )}
//       />
//       <Button type="submit">Se connecter</Button>

//     </form> */}

//   //   <Card className={classes.card}>
//   //   <CardHeader className={classes.header} title="Login" />
//   //   <CardContent>
//   //       {/* <input
//   //         id="email"
//   //         aria-invalid={errors.email ? "true" : "false"}
//   //         {...register("email", {
//   //           required: "required",
//   //           pattern: {
//   //             value: /\S+@\S+\.\S+/,
//   //             message: "Entered value does not match email format"
//   //           }
//   //         })}
//   //         type="email"
//   //         placeholder="example@mail.com"
//   //       /> */}
//   //       <TextField
//   //         // error={isError}
//   //         {...register("email")}
//   //         helperText={errors.email?.message}
//   //         fullWidth
//   //         id="username"
//   //         type="email"
//   //         label="Email"
//   //         placeholder="email"
//   //         margin="normal"
//   //         value=''
//   //         // onChange={handleUsernameChange}
//   //         // onKeyPress={handleKeyPress}
//   //       />
//   //       <TextField
//   //         // error={isError}
//   //         fullWidth
//   //         id="password"
//   //         type="password"
//   //         label="Password"
//   //         placeholder="Password"
//   //         margin="normal"
//   //         // helperText={helperText}
//   //         // onChange={handlePasswordChange}
//   //         // onKeyPress={handleKeyPress}
//   //       />
//   //   </CardContent>
//   //   <CardActions>
//   //     <Button
//   //       variant="contained"
//   //       size="large"
//   //       color="secondary"
//   //       className={classes.loginBtn}
//   //       // onClick={handleLogin}
//   //       // disabled={isButtonDisabled}
//   //       >
//   //       Login
//   //     </Button>
//   //   </CardActions>
//   // </Card>
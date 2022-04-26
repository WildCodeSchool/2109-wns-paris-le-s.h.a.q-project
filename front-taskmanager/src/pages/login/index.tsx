import React from 'react';
import { useForm } from 'react-hook-form';
import { gql, useLazyQuery } from '@apollo/client';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import "../../styles/login.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      // display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      fontFamily: 'Roboto',
      textAlign: 'center',
      background: '#ABB0DA',
      color: '#432C2C',

    },
    card: {
      marginTop: theme.spacing(10)
    },
    link: {
      marginTop: theme.spacing(2),
      color: '#432C2C',
      flexGrow: 1
,    }
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
  let navigate = useNavigate();
  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN);
  const { register, handleSubmit, formState: { errors } } = useForm<ISignInInput>({
    mode: 'onChange',
  });
  const classes = useStyles();

  const submitForm = async (dataForm: ISignInInput) => {
    await getLogin({
      variables: { ...dataForm },
    });
    navigate("/task", { replace: true });
  };

  console.log(errors);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :`${error}`</p>;
  if (data) {
    localStorage.setItem('token', data.login);
  }


  return (
    <form className={classes.container} onSubmit={handleSubmit(submitForm)} autoComplete="off" >
      <Card sx={{ minWidth: 275 }} className={classes.card}>
      <CardHeader className={classes.header} title="Login" />
      <CardContent>
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
        <div className={classes.link}>
        <Link to="/signup">No account? Sign up now!</Link>   
        </div>
      </CardContent> 
      <CardActions>
      <button className={classes.loginBtn} type="submit">
            SUBMIT
      </button>
      </CardActions>
      </Card>
  </form>
  );
}

export default Login;
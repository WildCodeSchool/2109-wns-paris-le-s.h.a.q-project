import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLazyQuery } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import LOGIN from '../../graphql/signin/Login';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link to="https://mui.com/">Your Website</Link> {new Date().getFullYear()}
      .
    </Typography>
  );
}

interface ISignInInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const navigate = useNavigate();
  const [
    getLogin,
    { loading: loginLoading, error: loginError, data: loginData },
  ] = useLazyQuery(LOGIN);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInput>();

  if (loginLoading) {
    console.log('loginLoading | ', loginLoading);
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  if (loginError) {
    console.log('loginError | ', loginError);
    return (
      <Typography variant="body1" component="p">
        {loginError.message}
      </Typography>
    );
  }
  // const submitForm = async (input: ICreateTask) => {
  //   reset();
  //   await addTask({ variables: { input: input } });
  //   refetch();
  //   handleCloseAddTask();
  // };

  const submitForm = async (dataForm: ISignInInput) => {
    await getLogin({
      variables: { ...dataForm },
    });
    navigate('/task', { replace: true });
  };
  if (loginData) {
    console.log('loginData | ', loginData);
    localStorage.setItem('token', loginData.login);
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(/images/Social_media_adv_SVG.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(submitForm)}
            sx={{ mt: 1 }}
          >
            <Controller
              name="email"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  type="email"
                  {...field}
                  id="email"
                  label="Adresse Email"
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="password"
              defaultValue=""
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  variant="outlined"
                  type="password"
                  id="password"
                  label="password"
                  {...field}
                />
              )}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#">Forgot password?</Link>
              </Grid>
              <Grid item>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

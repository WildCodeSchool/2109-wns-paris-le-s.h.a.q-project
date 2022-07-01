import React, {useEffect} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
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
  Link
} from '@mui/material';
import {EmotionJSX} from "@emotion/react/types/jsx-namespace";
import { yupResolver } from '@hookform/resolvers/yup/'
import LOGIN from '../../graphql/signin/Login';
import TaskInput from "../../components/pages/task/taskForm/TaskInput";
import validationSchema from "../../schema/login/validationSchema";
import ButtonNavigateToHome from "../../components/shared/ButtonNavigateToHome";


export function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link href="https://github.com/WildCodeSchool/2109-wns-paris-le-s.h.a.q-project.git" target="_blank">Task Manager Github</Link> {new Date().getFullYear()}
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

  useEffect(() => {
    if(localStorage.getItem('token')) {
      navigate('/task', { replace: true });
    }

  })

  const [
    getLogin,
    { loading: loginLoading, error: loginError, data: loginData },
  ] = useLazyQuery(LOGIN);
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInInput>({
    resolver: yupResolver(validationSchema),
  });

  if (loginLoading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  const submitForm = async (dataForm: ISignInInput) => {
    try {
      await getLogin({
        variables: { ...dataForm },
      });

    } catch {
      reset()

    }

  };
  if (loginData) {
    localStorage.setItem('token', loginData.login);
    navigate('/task', { replace: true });
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
          <Typography component="h1" variant="h3">
            Task Manager
          </Typography>
          <Typography component="h2" variant="h5">
            Se connecter
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(submitForm)}
            sx={{ mt: 3 }}
          >
            <TaskInput
                control={control}
                name="email"
                label="Adresse email"
                type="email"
                styled={{mb: 2}}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
            />
            <TaskInput
                control={control}
                name="password"
                label="Mot de passe"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">Mot de passe oublié ?</Link>
              </Grid>
              <Grid item>
                <Link href="/signup">Pas encore de compte ? Enregistrez vous</Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 10 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}


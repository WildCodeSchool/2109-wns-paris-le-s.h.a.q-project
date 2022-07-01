import * as React from 'react';
import {  useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link, Avatar, Button, Paper, Box, Grid, Typography, Backdrop, CircularProgress} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup/'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import SIGNUP from '../../graphql/signin/Signup';
import { Copyright } from '../login'
import validationSchema from "../../schema/signUp/validationSchema";
import TaskInput from "../../components/pages/task/taskForm/TaskInput";
import ButtonNavigateToHome from "../../components/shared/ButtonNavigateToHome";


interface ISignUpInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/task', { replace: true });
        }
    })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },

  } = useForm<ISignUpInput>({
      resolver: yupResolver(validationSchema),
  });

  const [createUser, { loading, error, data }] = useMutation(SIGNUP);

    if (loading) {
        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );
    }

    const submitForm = async (dataForm: ISignUpInput) => {
        const { firstName, lastName, email, password } = dataForm;
            try {
                await createUser({
                    variables: { createUserInput: {
                            firstName,
                            lastName,
                            email,
                            password
                        }
                    },
                });
            } catch (e) {
                navigate('/', { replace: true });
            }

    };

    if (data) {
         localStorage.setItem('token', data.createUser);
         navigate('/task', { replace: true });
    }


    return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={8}
        md={7}
        sx={{
          backgroundImage: 'url(/images/Web_SVG.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
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
                S&#39;enregistrer
            </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(submitForm)}
            sx={{ mt: 3 }}
          >
              <TaskInput
                  control={control}
                  name="lastName"
                  label="Nom"
                  type="lastName"
                  styled={{mb: 1}}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
              />

              <TaskInput
                  control={control}
                  name="firstName"
                  label="Prénom"
                  type="firstName"
                  styled={{my: 2}}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  fullWidth
              />

              <TaskInput
                  control={control}
                  name="email"
                  label="Adresse email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  fullWidth
              />
              <TaskInput
                  control={control}
                  name="password"
                  label="Mot de passe"
                  type="password"
                  styled={{my: 2}}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  fullWidth
              />
              <TaskInput
                  control={control}
                  name="confirmPassword"
                  label="Confirmer mot de passe"
                  type="password"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  fullWidth
              />


              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              création du compte
            </Button>
              <Grid container justifyContent="end" mt={2}>
                  <Grid item>
                      <Link href="/">Déjà enregistré ? Connectez vous directement</Link>
                  </Grid>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SignUp;

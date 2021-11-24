import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const CssTextField = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& .Mui-error": {
      color: "#f28443",
    },
    "& .Mui-error.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f28443",
      },
    },
    "& .MuiOutlinedInput-root": {
      color: "white",

      "& fieldset": {
        color: "white",
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },

    "& .Mui-focused": {
      color: "white",
      borderColor: "white!important",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  inputContainerLeft: {
    paddingRight: "2rem",

    [theme.breakpoints.down("xs")]: {
      paddingRight: "0",
    },
  },
  inputContainerRight: {
    paddingLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0 ",
    },
  },
}));

const schema = yup
  .object({
    name: yup.string().required("Champ requis"),
    email: yup
      .string()
      .email("Veuillez entrer une adresse valide")
      .required("Champ requis"),
  })
  .required();

const fetcher = (url) => fetch(url).then((res) => res.json());

const TaskInput = ({
  onSubmit,
}) => {
  //init
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //Render

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item xs={12} sm={6}>
            <div className={classes.inputContainerLeft}>
              <Controller
                name="name"
                defaultValue=""
                control={control}
                render={({ field }) => (
                  <CssTextField
                    {...field}
                    error={Boolean(errors.name)}
                    helperText={errors.name?.message}
                    size="small"
                    type="text"
                    margin="none"
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Nom & prénom"
                  />
                )}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className={classes.inputContainerRight}>
              <Controller
                defaultValue=""
                name="organisation"
                control={control}
                render={({ field }) => (
                  <CssTextField
                    {...field}
                    size="small"
                    type="text"
                    margin="none"
                    variant="outlined"
                    fullWidth
                    id="organisation"
                    label="Organisation"
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.inputContainerLeft}>
              <Controller
                defaultValue=""
                name="email"
                control={control}
                render={({ field }) => (
                  <CssTextField
                    {...field}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                    size="small"
                    variant="outlined"
                    type="email"
                    margin="none"
                    fullWidth
                    id="email"
                    label="Adresse e-mail"
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.inputContainerRight}>
              <Controller
                defaultValue=""
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <CssTextField
                    {...field}
                    size="small"
                    margin="none"
                    variant="outlined"
                    fullWidth
                    type="tel"
                    id="phone-number"
                    label="Téléphone"
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div style={{ marginTop: "16px" }}>
              <Controller
                defaultValue=""
                name="message"
                control={control}
                render={({ field }) => (
                  <CssTextField
                    {...field}
                    size="small"
                    variant="outlined"
                    margin="none"
                    id="message"
                    fullWidth
                    multiline
                    rows={3}
                    label="Votre demande"
                  />
                )}
              />
            </div>
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              style={{ width: "50%", minHeight: "50px", marginTop: "30px" }}
              variant="contained"
            >
              ENVOYER !
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default TaskInput;

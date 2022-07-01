import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email invalide")
        .required("L'email est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(4, "Mot de passe doit être plus grand que 8 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères"),
});

export default validationSchema;
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(4, "Trop petit")
        .max(50, "Trop long!")
        .required("Ce champ est obligatoire"),
    lastName: Yup.string()
        .min(2, "Trop petit")
        .max(10, "Trop long!")
        .required("Ce champ est obligatoire"),
    email: Yup.string()
        .email("Email invalide")
        .required("L'email est obligatoire"),
    password: Yup.string()
        .required("Mot de passe est obligatoire")
        .min(4, "Mot de passe doit être plus grand que 8 caractères")
        .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    confirmPassword: Yup.string()
        .required("Confirmation de mot de passe est obligatoire")
        .oneOf(
            [Yup.ref("password"), null],
            "Le mot de passe de confirmation ne correspond pas"
        ),
});

export default validationSchema;
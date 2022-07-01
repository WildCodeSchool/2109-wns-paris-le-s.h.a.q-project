import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";

const ButtonNavigateToHome = () => {
    const navigate = useNavigate()
    const navigateToHome = () => {
        navigate(-1)
    }

    return (
        <Button sx={{mt: 4, ml:2}} onClick={navigateToHome}>Retour en arrière</Button>
    )
}

export default ButtonNavigateToHome;
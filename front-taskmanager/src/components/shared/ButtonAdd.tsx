import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ButtonAdd = ({ titleButton, onClick }) => {
  return (
    <Button variant="outlined" onClick={onClick} startIcon={<AddIcon />}>
      {titleButton}
    </Button>
  );
};

export default ButtonAdd;

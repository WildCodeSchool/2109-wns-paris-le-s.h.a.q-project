import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

interface IButtonAdd {
  titleButton: string;
  onClick: any;
}

const ButtonAdd = ({ titleButton, onClick }: IButtonAdd) => {
  return (
    <Button variant="outlined" onClick={onClick} startIcon={<AddIcon />}>
      {titleButton}
    </Button>
  );
};

export default ButtonAdd;

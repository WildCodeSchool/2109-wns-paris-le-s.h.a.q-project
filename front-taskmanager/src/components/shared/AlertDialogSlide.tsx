import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { IAlertDialogSlide } from 'interfaces';
import AddTask from '@mui/icons-material/AddTask';
import Clear from '@mui/icons-material/Clear';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = ({
  handleCloseDeleteTask,
  openDeleteTask,
  setConfirmationDeleteTask,
}: IAlertDialogSlide) => {
  return (
    <Dialog
      open={openDeleteTask}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseDeleteTask}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{'Suppression'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Etes vous sûr de vouloir supprimer ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setConfirmationDeleteTask(false)}
          startIcon={<Clear />}
          variant="outlined"
        >
          Annuler
        </Button>
        <Button
          onClick={() => setConfirmationDeleteTask(true)}
          startIcon={<AddTask />}
          variant="outlined"
        >
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialogSlide;

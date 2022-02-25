import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddTask from '@mui/icons-material/AddTask';
import Clear from '@mui/icons-material/Clear';
import TaskInput from './TaskInput';
import { ITaskInput } from 'interfaces';

import { Dispatch, SetStateAction } from 'react';

interface IAlertDialogCreateTask {
  handleCloseAddTask: () => void;
  setConfirmationDeleteTask: Dispatch<SetStateAction<any>>;
  openAddTask: boolean;
}

const AlertDialogCreateTask = ({
  refetch,
  openAddTask,
  handleCloseAddTask,
}: ITaskInput) => {
  return (
    <div>
      <Dialog open={openAddTask} onClose={handleCloseAddTask}>
        <DialogTitle
          sx={{
            backgroundColor: '#6495ed',
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Ajouter une tâche
        </DialogTitle>
        <DialogContent>
          <TaskInput
            refetch={refetch}
            handleCloseAddTask={handleCloseAddTask}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseAddTask}
            startIcon={<Clear />}
            variant="outlined"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            form="test"
            startIcon={<AddTask />}
            variant="outlined"
          >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialogCreateTask;

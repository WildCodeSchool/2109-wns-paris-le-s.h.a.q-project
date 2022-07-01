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
import { IAddTaskForm } from 'interfaces';

import { Dispatch, SetStateAction } from 'react';
import AddTaskForm from './AddTaskForm';

// interface IAlertDialogCreateTask {
//   handleCloseAddTask: () => void;
//   setConfirmationDeleteTask: Dispatch<SetStateAction<any>>;
//   openAddTask: boolean;
// }

const AlertDialogCreateTask = ({
  refetch,
  openAddTask,
  handleCloseAddTask,
}: IAddTaskForm) => (
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
          <AddTaskForm
            refetch={refetch}
            handleCloseAddTask={handleCloseAddTask}
            openAddTask={undefined}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseAddTask}
            startIcon={<Clear />}
            variant="outlined"
            color="error"
          >
            Annuler
          </Button>
          <Button
            type="submit"
            form="addTask"
            startIcon={<AddTask />}
            variant="outlined"
            color="success"
          >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

export default AlertDialogCreateTask;

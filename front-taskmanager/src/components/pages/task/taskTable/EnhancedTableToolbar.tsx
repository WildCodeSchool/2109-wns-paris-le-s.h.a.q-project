import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertDialogSlide from 'components/shared/AlertDialogSlide';
import { IEnhancedTableToolbarProps, IConfirmation } from 'interfaces';
import DeleteTaskMutation from 'graphql/task/DeleteTaskMutation';

const EnhancedTableToolbar = (props: IEnhancedTableToolbarProps) => {
  const { numSelected, elementId, setSelected, refetch } = props;

  const [open, setOpen] = React.useState<boolean>(false);
  const [confirmation, setConfirmation] = React.useState(null);

  const [deleteTaskById, { data, loading, error }] =
    useMutation(DeleteTaskMutation);
  const deletedTask = (element: string[]) => {
    element.map(async (el) => {
      await deleteTaskById({ variables: { idToDelete: el } });
      refetch();
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (confirmation) {
      deletedTask(elementId);
      setConfirmation(null);
    } else {
      setSelected([]);
      setConfirmation(null);
    }
    handleClose();
  }, [confirmation]);
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.secondary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Liste des tâches
        </Typography>
      )}
      {numSelected > 0 ? (
        <>
          <Tooltip title="Delete">
            <IconButton onClick={handleClickOpen}>
              {/* onClick={() => deletedTask(elementId)} */}
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <AlertDialogSlide
            open={open}
            handleClose={handleClose}
            setConfirmation={setConfirmation}
          />
        </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;

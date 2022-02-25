import { Dispatch, SetStateAction } from 'react';

interface IAlertDialogSlide {
  handleCloseDeleteTask: () => void;
  setConfirmationDeleteTask: Dispatch<SetStateAction<any>>;
  openDeleteTask: boolean;
}

export default IAlertDialogSlide;

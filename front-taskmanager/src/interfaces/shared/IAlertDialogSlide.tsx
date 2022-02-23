import { IConfirmation } from 'interfaces';
import { Dispatch, SetStateAction } from 'react';

interface IAlertDialogSlide {
  handleClose: () => void;
  setConfirmation: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export default IAlertDialogSlide;

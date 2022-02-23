import { Dispatch, SetStateAction } from 'react';

interface IEnhancedTableToolbarProps {
  numSelected: number;
  elementId: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  refetch: () => void;
}

export default IEnhancedTableToolbarProps;

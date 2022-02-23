import ITaskData from 'interfaces/task/ITaskData';
import { TOrder } from 'types';

interface IEnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof ITaskData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TOrder;
  orderBy: string;
  rowCount: number;
}

export default IEnhancedTableProps;

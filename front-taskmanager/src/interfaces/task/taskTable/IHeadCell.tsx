import ITaskData from 'interfaces/task/ITaskData';

interface IHeadCell {
  disablePadding: boolean;
  id: keyof ITaskData;
  label: string;
}

export default IHeadCell;

import ITaskData from '../ITaskData';

interface ITaskInput {
  control: any;
  name: keyof ITaskData;
  label: string;
  type: string;
  styled: any;
}

export default ITaskInput;

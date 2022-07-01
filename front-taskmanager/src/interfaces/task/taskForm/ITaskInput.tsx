
interface ITaskInput {
  control: any;
  name: string;
  label: string;
  type: string;
  styled?: any;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export default ITaskInput;

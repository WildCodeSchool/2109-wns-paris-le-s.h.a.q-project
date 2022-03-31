interface ITaskData {
  id: string;
  subject: string;
  description: string;
  project: string;
  status: string;
  priority: string;
  user: string;
  initial_time_estimation: number;
  initial_time_spent: number;
  advancement: number;
  deadline: string;
}

export default ITaskData;

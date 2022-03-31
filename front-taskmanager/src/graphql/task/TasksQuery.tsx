import { gql } from '@apollo/client';

const TasksQuery = gql`
  query AllTasks {
    allTasks {
      id
      subject
      description
      project
      status
      priority
      user
      initial_time_estimation
      initial_time_spent
      advancement
      deadline
    }
  }
`;

export default TasksQuery;

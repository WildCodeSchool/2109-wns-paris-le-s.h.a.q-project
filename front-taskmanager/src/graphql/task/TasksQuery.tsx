import { gql } from '@apollo/client';

const TasksQuery = gql`
  query allTasks {
    allTasks {
      id
      subject
      project
      description
      assignee
      dueDate
      status
    }
  }
`;

export default TasksQuery;

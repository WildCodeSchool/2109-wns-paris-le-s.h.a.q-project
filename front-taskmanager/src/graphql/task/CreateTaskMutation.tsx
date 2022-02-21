import { gql } from '@apollo/client';

const CreateTaskMutation = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      subject
      description
      project
      id
      dueDate
      assignee
      status
    }
  }
`;

export default CreateTaskMutation;

import { gql } from '@apollo/client';

const CreateTaskMutation = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
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

export default CreateTaskMutation;

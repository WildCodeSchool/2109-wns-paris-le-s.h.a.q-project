import { gql } from '@apollo/client';

const DeleteTaskMutation = gql`
  mutation DeleteTask($idToDelete: String!) {
    deleteTask(id: $idToDelete)
  }
`;

export default DeleteTaskMutation;

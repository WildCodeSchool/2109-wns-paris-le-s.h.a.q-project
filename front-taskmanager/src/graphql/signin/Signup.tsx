import { gql } from '@apollo/client';

const SIGNUP = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput)
  }
`;
export default SIGNUP;

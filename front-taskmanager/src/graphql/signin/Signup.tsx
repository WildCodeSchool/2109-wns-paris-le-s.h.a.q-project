import { gql } from '@apollo/client';

const SIGNUP = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      firstName
      lastName
      email
      password
    }
  }
`;
export default SIGNUP;

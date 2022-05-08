import { gql } from '@apollo/client';

const LOGIN = gql`
  query Login($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;

export default LOGIN;

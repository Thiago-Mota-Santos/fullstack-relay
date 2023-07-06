import { graphql } from 'react-relay'

const SignInMutation = graphql`
  mutation user($username: String!, $email: String!, $password: String!) {
    userRegisterMutation(
      input: { username: $username, password: $password, email: $email }
    ) {
      token
      me {
        id
        username
      }
    }
  }
`

export { SignInMutation }

import { graphql } from 'react-relay'

const SignUpMutation = graphql`
  mutation SignupMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
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

export { SignUpMutation }

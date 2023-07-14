import { graphql } from 'react-relay'

const SignInMutation = graphql`
  mutation SigninMutation($email: String!, $password: String!) {
    userLoginMutation(input: { password: $password, email: $email }) {
      token
      me {
        id
        username
      }
    }
  }
`

export { SignInMutation }

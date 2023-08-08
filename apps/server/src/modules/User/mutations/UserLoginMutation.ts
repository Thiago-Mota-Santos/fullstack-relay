import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { successField } from '@entria/graphql-mongo-helpers'
import { UserType } from '../UserType'
import { UserModel } from '../UserModel'
import { generateJwtToken, setAuthCookie } from '../../../auth'
import { GraphQLContext } from '../../../graphql/context'

interface UserLogin {
  email: string
  password: string
}

const userLoginMutation = mutationWithClientMutationId({
  name: 'UserLoginMutation',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: UserLogin, { ctx }: GraphQLContext) => {
    const { email, password } = {
      password: args.password.trim(),
      email: args.email.trim().toLowerCase(),
    }

    const user = await UserModel.findOne({ email })
    if (!user) {
      throw new Error('User not found!')
    }

    const passwordIsCorrect = user.authenticate(password)

    if (!passwordIsCorrect) {
      throw new Error('Password is incorrect!')
    }

    const token = generateJwtToken(user._id)

    setAuthCookie(ctx, user)

    return {
      id: user._id,
      token,
      success: 'Login In successfully',
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    me: {
      type: UserType,
      resolve: async ({ id }) => await UserModel.findById(id),
    },
    ...successField,
  },
})

export { userLoginMutation }

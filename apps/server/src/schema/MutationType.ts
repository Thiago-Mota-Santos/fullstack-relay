import { GraphQLObjectType } from "graphql";

import * as UserMutation  from '../modules/User/mutations/UserLoginMutation'

export const UserSigninMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "Root of mutations",
    fields: () => ({
        ...UserMutation
    })
})
import { GraphQLObjectType } from 'graphql'

import * as UserLogin from '../modules/User/mutations/UserLoginMutation'
import * as UserRegister from '../modules/User/mutations/UserRegisterMutation'
import * as AppointmentRegisterMutation from '../modules/Appointment/mutations/AppointmentRegisterMutation'

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root of mutations',
  fields: () => ({
    ...UserLogin,
    ...UserRegister,
    ...AppointmentRegisterMutation,
  }),
})

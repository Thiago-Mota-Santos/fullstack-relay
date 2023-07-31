import { GraphQLObjectType } from 'graphql'

import * as UserLogin from '../modules/User/mutations/UserLoginMutation'
import * as UserRegister from '../modules/User/mutations/UserRegisterMutation'
import * as AppointmentRegisterMutation from '../modules/Appointment/mutations/AppointmentRegisterMutation'
import * as AppointmentDelete from '../modules/Appointment/mutations/AppointmentDelete'
import * as AppointmentUpdate from '../modules/Appointment/mutations/AppointmentUpdate'

export const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root of mutations',
  fields: () => ({
    ...UserLogin,
    ...UserRegister,
    ...AppointmentRegisterMutation,
    ...AppointmentDelete,
    ...AppointmentUpdate,
  }),
})

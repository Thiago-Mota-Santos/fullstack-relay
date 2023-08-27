import { GraphQLContext } from './../../../graphql/context'
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { AppointmentConnection } from '../AppointmentType'
import { Appointment, AppointmentModel } from '../AppointmentModel'
import { AppointmentLoader } from '../AppointmentLoader'
import { successField } from '@entria/graphql-mongo-helpers'

const appointmentRegisterMutation = mutationWithClientMutationId({
  name: 'AppointmentRegister',
  inputFields: {
    clientName: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    hour: { type: new GraphQLNonNull(GraphQLString) },
    graphicLocation: { type: new GraphQLNonNull(GraphQLString) },
    service: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async (args: Appointment, ctx: GraphQLContext) => {
    const { clientName, date, graphicLocation, hour, service } = args

    console.log('CONTEXT : ' + ctx.user)
    console.log('APPOINTMENTE CREATE')

    if (!ctx.user) {
      throw new Error('You must be logged in to register an appointment')
    }

    const newAppointment = await new AppointmentModel({
      clientName,
      date,
      graphicLocation,
      hour,
      service,
    }).save()

    return {
      id: newAppointment._id.toString(),
      success: 'New appointment has been created',
    }
  },
  outputFields: {
    appointmentEdge: {
      type: AppointmentConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const appointment = await AppointmentLoader.load(context, id)
        if (!appointment) return null

        return {
          cursor: toGlobalId('Appointment', appointment._id),
          node: appointment,
        }
      },
      ...successField,
    },
  },
})

export { appointmentRegisterMutation }

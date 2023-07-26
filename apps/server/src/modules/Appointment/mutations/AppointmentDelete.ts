import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { GraphQLContext } from '../../../graphql/context'
import { getObjectId, successField } from '@entria/graphql-mongo-helpers'
import { AppointmentModel } from '../AppointmentModel'
import { AppointmentLoader } from '../AppointmentLoader'

export const AppointmentDelete = mutationWithClientMutationId({
  name: 'AppointmentDelete',
  inputFields: {
    AppointmentId: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async ({ AppointmentId }, ctx: GraphQLContext) => {
    if (!ctx.user) {
      throw new Error('You must be logged in to delete an appointment')
    }

    const foundAppointment = await AppointmentModel.findById(
      getObjectId(AppointmentId),
    )

    if (!foundAppointment) {
      throw new Error('This appointment does not exist')
    }

    await AppointmentModel.findOneAndDelete({ _id: getObjectId(AppointmentId) })

    return {
      success: 'Appointment successfully deleted',
    }
  },
  outputFields: {
    appointmentId: {
      type: GraphQLID,
      resolve: async ({ id }, _, context) => {
        const appointment = await AppointmentLoader.load(context, id)

        if (!appointment) return null

        return toGlobalId('Appointment', appointment.id)
      },
    },
    ...successField,
  },
})

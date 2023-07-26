import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { GraphQLContext } from '../../../graphql/context'
import { getObjectId, getObjectId, successField } from '@entria/graphql-mongo-helpers'
import { AppointmentModel } from '../AppointmentModel'

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
  outputFields: () => ({
    ...successField,
  }),
})

import { getObjectId, successField } from '@entria/graphql-mongo-helpers'
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay'
import { GraphQLContext } from '../../../graphql/context'
import { AppointmentLoader } from '../AppointmentLoader'
import { AppointmentModel } from '../AppointmentModel'
import { AppointmentConnection } from '../AppointmentType'

const appointmentUpdateMutation = mutationWithClientMutationId({
  name: 'AppointmentUpdate',
  inputFields: {
    appointmentId: { type: new GraphQLNonNull(GraphQLString) },
    clientName: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    hour: { type: new GraphQLNonNull(GraphQLString) },
    graphicLocation: { type: new GraphQLNonNull(GraphQLString) },
    service: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async (
    { appointmentId, ...updatedFields },
    ctx: GraphQLContext,
  ) => {
    if (!ctx.user) {
      throw new Error('Você precisa estar logado para atualizar um agendamento')
    }

    const updatedAppointment = await AppointmentModel.findByIdAndUpdate(
      getObjectId(appointmentId),
      updatedFields,
      { new: true },
    )

    if (!updatedAppointment) {
      throw new Error('This appointment does not exist.')
    }

    return {
      id: updatedAppointment._id.toString(),
      success: 'Appointment updated successfully',
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

export { appointmentUpdateMutation }

import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { GraphQLContext } from "../../../graphql/Context";
import { fieldError } from '../../../utils/fieldError';
import { AppointmentConnection } from '../AppointmentType';
import { successField } from '@entria/graphql-mongo-helpers';
import { Appointment, AppointmentModel } from '../AppointmentModel';
import { AppointmentLoader } from '../AppointmentLoader';


const AppointmentRegisterMutation = mutationWithClientMutationId({
    name: "AppointmentRegister",
    inputFields: {
        clientName: { type: new GraphQLNonNull(GraphQLString)},
        date: { type: new GraphQLNonNull(GraphQLString)},
        hour: { type: new GraphQLNonNull(GraphQLString)},
        graphicLocation: { type: new GraphQLNonNull(GraphQLString)},
        service: { type: new GraphQLNonNull(GraphQLString)},


    },
    mutateAndGetPayload: async (args: Appointment, { ctx }: GraphQLContext ) => {
        const { _id, clientName, date, graphicLocation, hour, service } = args;

        if(!ctx?.user){
            return fieldError("user", "not logged in");
        }

       const newAppointment = await new AppointmentModel({
            _id,
            clientName,
            date,
            graphicLocation,
            hour,
            service,
       }).save();

       return {
        id: newAppointment._id,
        success: "New appointment has been created"
       }
    
    },
    outputFields: {
        me:{
            type: AppointmentConnection.edgeType,
            resolve: async ({ id, _, context}) => {
              const appointment = await AppointmentLoader.load(context, id);

              if(!appointment) return null;

              return {
                cursor: toGlobalId("Appointment", appointment._id),
                node: appointment
              }
            
        },
        ...fieldError,
        ...successField
    }
}});

export default AppointmentRegisterMutation
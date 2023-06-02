import { GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLContext } from "../../../graphql/Context";
import { Appointment } from "../AppointmentModel";
import { fieldError } from '../../../utils/fieldError';



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

       const newAppointment = await new AppointmentModel
    
    },
    outputFields: {

    }
})
import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Appointment } from "./AppointmentModel";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { nodeInterface, registerTypeLoader } from "../../node/typeRegister";
import { connectionArgs, withFilter } from '@entria/graphql-mongo-helpers'
import { AppointmentLoader } from "./AppointmentLoader";

export const AppointmentType = new GraphQLObjectType<Appointment>({
    name: "Appointment",
    description: "Represent an Appointment list",
    fields: () => ({
        id: globalIdField("Appointment"),
        clientName: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: appointment => appointment.clientName
        },

        service:{
            type: new GraphQLNonNull(GraphQLString),
            resolve: appointment => appointment.service
        },

        date:{
            type: new GraphQLNonNull(GraphQLString),
            resolve: appointment => appointment.date
        },
        hour:{
            type: new GraphQLNonNull(GraphQLString),
            resolve: appointment => appointment.hour
        },
        graphicLocation:{
            type: new GraphQLNonNull(GraphQLString),
            args: { ...connectionArgs},
            resolve: async (appointment, args, context) =>
                await AppointmentLoader.loadAll(
                    context,
                    withFilter(args, { appointment: appointment._id }),
                ),
                description: 'List containing Id all appointment'
        },
    }),
    interfaces: () => [nodeInterface],
});

export const AppointmentConnection = connectionDefinitions({
    name: "Appointment",
    nodeType: AppointmentType
})

registerTypeLoader(AppointmentType, AppointmentLoader.load);
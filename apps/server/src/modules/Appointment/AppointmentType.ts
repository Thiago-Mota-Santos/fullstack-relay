import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { Appointment } from "./AppointmentModel";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { nodeInterface, registerTypeLoader } from "../../node/typeRegister";
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
            resolve: appointment => appointment.graphicLocation
        },
    }),
    interfaces: () => [nodeInterface],
});

export const AppointmentConnection = connectionDefinitions({
    name: "Appointment",
    nodeType: AppointmentType
})

registerTypeLoader(AppointmentType, AppointmentLoader.load);
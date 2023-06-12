import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { nodeField, nodesField } from "../node/typeRegister";
import { AppointmentConnection } from "../modules/Appointment/AppointmentType";
import { connectionArgs } from "@entria/graphql-mongo-helpers";
import { AppointmentLoader } from "../modules/Appointment/AppointmentLoader";

const appointments: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLNonNull(AppointmentConnection.connectionType),
    args: { ...connectionArgs},
    resolve: async(_root, args, context) => 
        await AppointmentLoader.loadAll(context, args),
}

export const QueryType = new GraphQLObjectType({
    name: "Query",
    description: "root of all queries",
    fields: () => ({
        node: nodeField,
        nodes: nodesField,
        appointments,
    })
} )
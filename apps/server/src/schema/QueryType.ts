import { GraphQLFieldConfig, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { nodeField, nodesField } from "../node/typeRegister";
import { AppointmentConnection } from "../modules/Appointment/AppointmentType";
import { connectionArgs } from "@entria/graphql-mongo-helpers";
import { AppointmentLoader } from "../modules/Appointment/AppointmentLoader";
import { UserConnection, UserType } from "../modules/User/UserType";
import { UserLoader } from "../modules/User/UserLoader";

const appointments: GraphQLFieldConfig<any, any, any> = {
    type: new GraphQLNonNull(AppointmentConnection.connectionType),
    args: { ...connectionArgs},
    resolve: async(_root, _args, context) => 
        await AppointmentLoader.loadAll(context, _args),
}

const me: GraphQLFieldConfig<any, any, any> = {
    type: UserType,
    description: "user logged",
    resolve: async (_root, _args, context) => 
        await UserLoader.loadAll(context, context.user?.id)
}

export const QueryType = new GraphQLObjectType({
    name: "Query",
    description: "root of all queries",
    fields: () => ({
        node: nodeField,
        nodes: nodesField,
        appointments,
        me
    })
} )
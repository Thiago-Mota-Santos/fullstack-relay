import {  GraphQLSchema } from "graphql";
import { MutationType } from "./MutationType";
import { QueryType } from "./QueryType";

const schema = new GraphQLSchema({
    mutation: MutationType,
    query: QueryType
})

export { schema }
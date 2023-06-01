import {  GraphQLSchema } from "graphql";
import { MutationType } from "./MutationType";


const schema = new GraphQLSchema({
    mutation: MutationType
})

export { schema }
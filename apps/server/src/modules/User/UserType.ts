import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql'
import { UserProps } from './UserModel'
import { connectionDefinitions, globalIdField } from 'graphql-relay'
import { nodeInterface, registerTypeLoader } from '../../node/typeRegister';
import { UserLoader } from './UserLoader';


const UserType = new GraphQLObjectType<UserProps>({
    name: "User",
    description: "Represents an authenticating user",
    fields: () =>  ({
        id: globalIdField('User'),
        username: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: user => user.username,
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: user => user.email
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: user => user.password
        }
    }),
    interfaces: () => [nodeInterface]
    
});

export const UserConnection = connectionDefinitions({
    name: "userConnection",
    nodeType: UserType,
})

registerTypeLoader(UserType, UserLoader.load);
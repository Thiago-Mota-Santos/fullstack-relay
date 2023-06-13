import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { generateJwtToken } from "../../../Auth";
import { UserLoader } from '../UserLoader';
import { successField } from '@entria/graphql-mongo-helpers';
import { UserType } from '../UserType';
import { UserModel } from '../UserModel';

export const UserRegisterMutation = mutationWithClientMutationId({
    name: "UserRegister",
    description: "Register a new user",
    inputFields: {
        username: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString)},
        password: { type: new GraphQLNonNull(GraphQLString)},
    },

    mutateAndGetPayload: async({ username, email, password,  ...rest}) => {


        const hasUser = (await UserModel.countDocuments({email: email.trim()})) > 0;

        if(hasUser){
            throw new Error("This user already exists");
        }

        const user = await new UserModel({
            username,
            email,
            password,
            ...rest
        }).save()


        const token = generateJwtToken(user);

        return {
            token,
            id: user._id,
            success: "User registered"
        }

    },
    outputFields: {
        me:{
          type: UserType,
          resolve: async ({ id }) => await UserModel.findById(id),
        },
        token:{
            type: GraphQLString,
            resolve: ({ token }) => token,
        },
        ...successField,
        
    }
})
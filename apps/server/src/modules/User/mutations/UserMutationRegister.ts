import { setAuthCookie } from './../../../Auth';
import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLContext } from "../../../graphql/Context";
import UserModel from "../UserModel";
import { fieldError } from "../../../utils/fieldError";
import { generateJwtToken } from "../../../Auth";
import { UserLoader } from '../UserLoader';
import { successField } from '@entria/graphql-mongo-helpers';
import { UserType } from '../UserType';

interface UserRegister{
    username: string;
    email: string;
    password: string;
}

export const UserRegisterMutation = mutationWithClientMutationId({
    name: "UserRegister",
    description: "Register a new user",
    inputFields: {
        username: { type: new GraphQLNonNull(GraphQLString)},
        email: { type: new GraphQLNonNull(GraphQLString)},
        password: { type: new GraphQLNonNull(GraphQLString)},
    },

    mutateAndGetPayload: async(args: UserRegister, { ctx }: GraphQLContext ) => {

        const { username, email, password } = args;

        const hasUser = (await UserModel.countDocuments({email: email.trim()})) > 0;



        if(hasUser){
           return fieldError("This user", "already exists")
        }

        const user = await new UserModel({
            username,
            email,
            password,
        }).save()

        setAuthCookie(ctx, user)

        const token = generateJwtToken(user)

    },
    outputFields: {
        me:{
          type: UserType,
          resolve: async ({ id }, _, context) =>{
            return UserLoader.load(context, id);
          },
        },
        token:{
            type: GraphQLString,
            resolve: ({ token }) => token,
        },
        ...fieldError,
        ...successField,
        
    }
})
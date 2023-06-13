import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { GraphQLContext } from "../../../graphql/Context";
import { UserLoader } from "../UserLoader";
import { generateJwtToken} from "../../../Auth";
import { fieldError } from "../../../utils/fieldError";
import { successField } from "@entria/graphql-mongo-helpers";
import { UserType } from '../UserType'
import { UserModel } from "../UserModel";

interface UserLogin {
    email: string;
    password: string;
}

const UserLoginMutation = mutationWithClientMutationId({
    name: "UserLoginMutation",
    inputFields:{
        email:{
            type: new GraphQLNonNull(GraphQLString),
        },
        password:{
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    mutateAndGetPayload: async(args: UserLogin, { ctx }: GraphQLContext) =>{
        const { email, password } = {
            password: args.password.trim(),
            email: args.email.trim().toLowerCase(),
        };

        const user = await UserModel.findOne ({ email });

        if(!user){
            return fieldError("email", "not found");
        }

        const passwordIsCorrect = user.authenticate(password);

        if(!passwordIsCorrect){
            return fieldError("Password", "not correct");
        }

        const token = generateJwtToken(user._id)

        return {
            id: user._id,
            token,
            success: "Login In successfully"
        }
    },
    outputFields: {
        token:{
            type: GraphQLString,
            resolve: ( { token }) => token
        },
        me: {
          type: UserType,
          resolve: ({ id }, _, context) => {
            return UserLoader.load(context, id);
          },
        },
        ...fieldError,
        ...successField,
      },
})

export { UserLoginMutation };
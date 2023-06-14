import { GraphQLError } from "graphql";

export interface UserRegisterMutationResult {
    data: {
      userRegisterMutation: {
        token: string;
        me: {
          id: string;
          username: string;
        };
      };
    };
     errors?: ReadonlyArray<GraphQLError>
}

export interface UserLoginMutationResult {
  data: {
    userLoginMutation: {
      token: string;
      me?: {
        id?: string;
      };
    };
  };
   errors?: ReadonlyArray<GraphQLError>
}
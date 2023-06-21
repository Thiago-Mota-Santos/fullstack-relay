import { getDataLoaders } from "./modules/loader/loaderRegister"
import { UserDocument } from "./modules/User/UserModel";
import { Maybe } from "../../../packages/types/src/Maybe";
import { Context } from 'koa'
import { GraphQLContext } from "./graphql/context";

type ContextVars = {
    ctx?: Context;
    user: Maybe<UserDocument>;
}

export const getContext = ({ ctx, user }: ContextVars) => {
  const dataloaders = getDataLoaders();

  return {
    ctx,
    dataloaders,
    user,
  } as GraphQLContext;
};

import { GraphQLContext } from "./graphql/Context"
import { getDataLoaders } from "./modules/loader/loaderRegister"
import { UserDocument } from "./modules/User/UserModel";
import { Maybe } from "../../../packages/types/src/Maybe";
import { Request } from 'koa'

type ContextVars = {
    req?: Request
    user?: Maybe<UserDocument>
}

export const getContext = (ctx?: ContextVars) => {
  const dataloaders = getDataLoaders();

  return {
    req: ctx?.req,
    dataloaders,
    user: ctx?.user || null,
  } as GraphQLContext;
};

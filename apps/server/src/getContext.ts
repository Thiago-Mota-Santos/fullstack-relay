import { GraphQLContext } from "./graphql/Context"
import { getDataLoaders } from "./modules/loader/loaderRegister"
import { ParameterizedContext } from 'koa';
import { UserDocument } from "./modules/User/UserModel";
import { Maybe } from "../../../packages/types/src/Maybe";


type ContextVars = {
    ctx: ParameterizedContext
    user: Maybe<UserDocument>
}

const getContext = async ({ ctx, user }: ContextVars): Promise<GraphQLContext> => {
    const dataloaders = getDataLoaders();

    return{
        ctx,
        user,
        dataloaders,
    }
}

export { getContext }
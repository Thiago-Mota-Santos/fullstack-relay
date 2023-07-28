import { Maybe } from '@fullstack/types'
import { getDataLoaders } from './modules/loader/loaderRegister'
import { UserDocument } from './modules/User/UserModel'
import { ParameterizedContext } from 'koa'

interface ContextVars {
  ctx?: ParameterizedContext
  user: Maybe<UserDocument>
}

export const getContext = ({ ctx, user }: ContextVars) => {
  const dataloaders = getDataLoaders()
  return {
    ctx,
    dataloaders,
    user,
  } as const
}

import { Maybe } from '@fullstack/types'
import { getDataLoaders } from './modules/loader/loaderRegister'
import { UserDocument } from './modules/User/UserModel'
import { VercelRequest } from '@vercel/node'

interface ContextVars {
  ctx?: VercelRequest
  user: Maybe<UserDocument>
}

export const getContext = ({ ctx, user }: ContextVars) => {
  const dataloaders = getDataLoaders()
  console.log('dataloaders : ' + ctx + user)
  return {
    ctx,
    dataloaders,
    user,
  } as const
}

import { ParameterizedContext } from 'koa'
import { UserDocument } from '../modules/User/UserModel'
import { DataLoaders } from '../modules/loader/loaderRegister'
import { Maybe } from '../../../../packages/types/src/Maybe'

export interface GraphQLContext {
  ctx?: ParameterizedContext
  user?: Maybe<UserDocument>
  dataloaders: DataLoaders
}

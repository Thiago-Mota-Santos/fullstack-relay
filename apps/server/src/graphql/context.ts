import { ParameterizedContext } from 'koa';
import  { UserDocument }  from '../modules/User/UserModel'
import { DataLoaders } from '../modules/loader/loaderRegister';

export interface GraphQLContext {
  ctx: ParameterizedContext;
  user?: UserDocument;
  dataloaders: DataLoaders;
}


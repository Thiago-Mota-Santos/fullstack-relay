import jwt from 'jsonwebtoken'

import { config } from './config'

import { UserDocument, UserModel } from './modules/User/UserModel'
import { ParameterizedContext } from 'koa'
import { Maybe } from '@fullstack/types'

export const getUser = async (
  ctx: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {
  const token = ctx.cookies.get('graphic-token')

  try {
    if (!token) return { user: null }

    const subToken = token.substring(6)
    const decodedToken = jwt.verify(subToken, config.JWT_KEY)
    const decodedId = decodedToken as { id: string }

    const user = await UserModel.findOne({ _id: decodedId.id })
    return { user }
  } catch (err) {
    return { user: null }
  }
}

export const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, config.JWT_KEY)}`
}

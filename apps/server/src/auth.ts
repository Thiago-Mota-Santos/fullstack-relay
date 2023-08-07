import jwt from 'jsonwebtoken'
import type { VercelRequest } from '@vercel/node'

import { UserDocument, UserModel } from './modules/User/UserModel'
import { Maybe } from '@fullstack/types'
import cookie from 'cookie'
import { debugConsole } from './debugConsole'
import { ParameterizedContext } from 'koa'

const JWT_KEY = process.env.JWT_KEY as string
export const getUser = async (
  // ctx: ParameterizedContext,
  request: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {
  const token = request.cookies.get('graphic-token')

  console.log(token)
  try {
    if (!token) return { user: null }

    const subToken = token.substring(6)
    const decodedToken = jwt.verify(subToken, JWT_KEY)
    const decodedId = decodedToken as { id: string }

    const user = await UserModel.findOne({ _id: decodedId.id })
    return { user }
  } catch (err) {
    return { user: null }
  }
}

export const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

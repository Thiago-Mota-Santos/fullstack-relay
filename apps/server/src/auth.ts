import { VercelRequest } from '@vercel/node'
import jwt from 'jsonwebtoken'

import { UserDocument, UserModel } from './modules/User/UserModel'
import { Maybe } from '@fullstack/types'
import { ParameterizedContext } from 'koa'

const JWT_KEY = process.env.JWT_KEY as string
const AUTH = '_vercel_jwt'
const getUser = async (
  // ctx: VercelRequest,
  ctx: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {
  const token = ctx.cookies.get('_vercel_jwt')

  try {
    if (!token) return { user: null }

    const subToken = token.substring(4)
    console.log('SUB: ' + subToken)
    const decodedToken = jwt.verify(subToken, JWT_KEY)
    const decodedId = decodedToken as { id: string }

    const user = await UserModel.findOne({ _id: decodedId.id })
    return { user }
  } catch (err) {
    return { user: null }
  }
}

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

export { getUser, generateJwtToken }

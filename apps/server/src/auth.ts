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
  request: VercelRequest,
): Promise<{ user: Maybe<UserDocument> }> => {
  const cookieHeader = request.headers['cookie']
  const cookies: { [key: string]: string } = {}
  if (cookieHeader) {
    cookieHeader.split(';').forEach((cookie) => {
      const parts = cookie.split('=')
      const key = parts[0].trim()
      const value = parts[1].trim()
      cookies[key] = value
    })
  }
  const token = cookies['_vercel_jwt']
  console.log('TOKEN ' + token)

  try {
    if (!token) return { user: null }

    const subToken = token.substring(6)
    const decodedToken = jwt.verify(subToken, JWT_KEY)
    const decodedId = decodedToken as { id: string }

    debugConsole(decodedId)

    const user = await UserModel.findOne({ _id: decodedId.id })
    return { user }
  } catch (err) {
    return { user: null }
  }
}

export const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

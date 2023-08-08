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
  const token = request.cookies.get('_vercel_jwt')

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

  console.log('HEADERS : ' + cookieHeader)
  const token1 = cookies['graphic-token']
  const token2 = cookies['_vercel_jwt']
  console.log('TOKEN2: ' + token2)
  console.log('TOKEN1 : ' + token1)

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

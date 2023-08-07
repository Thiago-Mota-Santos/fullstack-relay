import jwt from 'jsonwebtoken'
import type { VercelRequest, VercelResponse } from '@vercel/node'

import { UserDocument, UserModel } from './modules/User/UserModel'
import { ParameterizedContext } from 'koa'
import { Maybe } from '@fullstack/types'

const JWT_KEY = process.env.JWT_KEY as string
export const getUser = async (
  // ctx: ParameterizedContext,
  request: VercelRequest,
): Promise<{ user: Maybe<UserDocument> }> => {
  // const token = ctx.cookies.get('graphic-token')
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
  const token = cookies['graphic-token']
  console.log('TOKEN : ' + token)
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

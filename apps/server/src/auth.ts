import { VercelRequest } from '@vercel/node'
import jwt from 'jsonwebtoken'

import { UserDocument, UserModel } from './modules/User/UserModel'
import { Maybe } from '@fullstack/types'
import { debugConsole } from './debugConsole'
import { ParameterizedContext } from 'koa'

const JWT_KEY = process.env.JWT_KEY as string
const getUser = async (
  ctx: VercelRequest,
  // request: VercelRequest
): Promise<{ user: Maybe<UserDocument> }> => {
  // const token = ctx.cookies.get('_vercel_jwt')

  const cookieHeader = ctx.headers['cookie']
  const cookies: { [key: string]: string } = {}
  if (cookieHeader) {
    cookieHeader.split(';').forEach((cookie) => {
      const parts = cookie.split('=')
      const key = parts[0].trim()
      const value = parts[1].trim()
      cookies[key] = value
    })
  }
  const { x_authorization } = ctx.headers
  const token = cookies['_vercel_jwt']
  console.log('AUTH : ' + x_authorization)

  if (x_authorization === process.env.JWT_TOKEN) {
    console.log(x_authorization)
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
}

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

export { getUser, generateJwtToken }

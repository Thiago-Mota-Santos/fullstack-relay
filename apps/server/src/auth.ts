import jwt from 'jsonwebtoken'
import { UserDocument, UserModel } from './modules/User/UserModel'
import { Maybe } from '@fullstack/types'
import { ParameterizedContext } from 'koa'
import { VercelRequest } from '@vercel/node'

const JWT_KEY = process.env.JWT_KEY as string
const getUser = async (
  ctx: VercelRequest,
): Promise<{ user: Maybe<UserDocument> }> => {
  // const token1 = ctx.cookies.get('_vercel_jwt')

  const cookieHeader = ctx.headers['cookie']
  const cookies: { [key: string]: string } = {}
  if (cookieHeader) {
    cookieHeader.split(';').forEach((cookie) => {
      console.log(cookie)
      const parts = cookie.split('=')
      const key = parts[0].trim()
      const value = parts[1].trim()
      cookies[key] = value
    })
  }

  const token = cookies['_vercel_jwt']

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

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

export { getUser, generateJwtToken }

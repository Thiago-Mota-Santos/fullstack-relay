import jwt from 'jsonwebtoken'
import { UserDocument, UserModel } from './modules/User/UserModel'
import { Maybe } from '@fullstack/types'
import { ParameterizedContext } from 'koa'
import { IncomingHttpHeaders } from 'http'

const JWT_KEY = process.env.JWT_KEY as string

const getCookie = (headers: IncomingHttpHeaders): Maybe<HeadersInit> => {
  return headers.cookie ? { Cookie: headers.cookie } : null
}

const getUser = async (
  ctx: ParameterizedContext,
): Promise<{ user: Maybe<UserDocument> }> => {
  // const token = ctx.cookies.get('_vercel_jwt')
  const token = getCookie(ctx.req.headers)

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

const generateJwtToken = (user: UserDocument) => {
  return `JWT ${jwt.sign({ id: user._id }, JWT_KEY)}`
}

export { getUser, generateJwtToken }

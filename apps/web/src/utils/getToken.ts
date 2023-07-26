import { Maybe } from '@fullstack/types'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
import { IncomingHttpHeaders } from 'http2'
import { SetOption } from 'cookies'

const AUTH_COOKIE = 'graphic-token'

function getToken(headers: IncomingHttpHeaders) {
  return headers.cookie ? { Cookie: headers.cookie } : undefined
}

const getAuthToken = (): Maybe<string> => {
  const { AUTH_COOKIE: token } = parseCookies()
  return token
}

const setAuthToken = (token: string) => {
  setCookie(undefined, AUTH_COOKIE, token, {
    maxAge: 3600 * 24 * 7,
    path: '/',
  } as SetOption)
}

const delAuthToken = () => {
  destroyCookie(undefined, AUTH_COOKIE)
}

export { getToken, getAuthToken, setAuthToken, delAuthToken }

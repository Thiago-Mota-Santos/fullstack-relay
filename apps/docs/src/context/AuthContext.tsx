import { ReactNode, createContext, useEffect, useState } from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies'

interface AuthProps {
  children: ReactNode
}

interface AuthContextProps {
  signIn: (token: string) => void
  isAuth: boolean
  logOut: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProps) {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const { 'graphic-token': token } = parseCookies()

    if (token) {
      setIsAuth(true)
    } else {
      destroyCookie(undefined, 'graphic-token')
    }
  }, [])

  function signIn(token: string) {
    setCookie(undefined, 'graphic-token', token, {
      maxAge: 60 * 60 * 48, //48 hours
    })
    setIsAuth(true)
  }

  function logOut() {
    destroyCookie(undefined, 'graphic-token')
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

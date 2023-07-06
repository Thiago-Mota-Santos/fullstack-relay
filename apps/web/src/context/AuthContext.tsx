import { ReactNode, createContext } from 'react'

interface AuthProps {
  children: ReactNode
}

interface AuthContextProps {
  isAuth: boolean
}

interface signInProps {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProps) {
  const isAuth = false

  async function signIn({ email, password }: signInProps) {
    // relay fetch
  }

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  )
}

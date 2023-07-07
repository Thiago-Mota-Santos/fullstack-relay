'use client'
import {
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { useMutation } from 'react-relay'
import { SignInMutation } from './SigninMutation'
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'

interface AuthProps {
  children: ReactNode
}

interface User {
  email: string
  password: string
}

export interface Data {
  userRegisterMutation: {
    user: SetStateAction<User>
    token: string
  }
}

interface AuthContextProps {
  signIn: (data: signInProps) => Promise<void>
  isAuth: boolean
  user: User
}

interface signInProps {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuth = !!user
  const [signInRequest] = useMutation(SignInMutation)

  useEffect(() => {
    const isLogin = Router.pathname === '/login'
    const { 'graphic-token': token } = parseCookies()
    if (isLogin && token) {
      console.log('Already logged in') // TODO -> implement toast component, RADIX UI
    }
    Router.push('/login')
  }, [])

  async function signIn({ email, password }: signInProps) {
    // relay fetch
    signInRequest({
      variables: {
        email,
        password,
      },
      onError(error) {
        console.log(error.message) // implements toast
      },
      onCompleted(data: Data) {
        setCookie(undefined, 'graphic-token', data?.userRegisterMutation.token)
        setUser(data.userRegisterMutation.user)
        Router.push('/dashboard')
      },
    })
  }

  return (
    <AuthContext.Provider value={{ isAuth, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}

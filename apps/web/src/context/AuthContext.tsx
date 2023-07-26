import { Maybe } from '@fullstack/types'

import React, { useState, useMemo, useCallback } from 'react'

import { delAuthToken, getAuthToken, setAuthToken } from '../utils/getToken'

interface AuthContextValue {
  token: Maybe<string>
  signIn: (token: Maybe<string>) => void
  signout: () => void
}

export const AuthContext = React.createContext({} as AuthContextValue)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<AuthContextValue['token']>(() =>
    getAuthToken(),
  )

  const signIn = useCallback<AuthContextValue['signIn']>((token) => {
    setAuthToken(token || '')
    setUserToken(token)
  }, [])

  const signout = useCallback<AuthContextValue['signout']>(() => {
    setUserToken(null)
    delAuthToken()
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      token: userToken,
      signIn,
      signout,
    }),
    [userToken, signIn, signout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

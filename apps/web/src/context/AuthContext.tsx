import { Maybe } from '@/interfaces/Maybe';
import { destroyCookie, setCookie } from 'nookies';
import { getAuthToken } from '@/utils/getToken'

import React, { useState, useMemo, useCallback } from 'react';

interface AuthContextValue {
  token: Maybe<string>;
  signIn: (token: Maybe<string>) => void;
  signout: () => void;
}

const AUTH_COOKIE = 'graphic-token'
export const AuthContext = React.createContext({} as AuthContextValue);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<AuthContextValue['token']>(() => getAuthToken());
  const signIn = useCallback<AuthContextValue['signIn']>((token) => {
    setCookie(undefined, AUTH_COOKIE, token, {
      maxAge: 3600 * 24 * 7,
      path: '/',
    })
    setUserToken(token);
  }, []);

  const signout = useCallback<AuthContextValue['signout']>(() => {
    setUserToken(null);
    destroyCookie(undefined, AUTH_COOKIE)
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      token: userToken,
      signIn,
      signout,
    }),
    [userToken, signIn, signout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
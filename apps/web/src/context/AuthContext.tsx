import { Maybe } from '@/interfaces/Maybe';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

import React, { useState, useMemo, useCallback } from 'react';

interface AuthContextValue {
  token: Maybe<string>;
  signin: (token: Maybe<string>) => void;
  signout: () => void;
}

const AUTH_COOKIE = 'graphic-token'
export const AuthContext = React.createContext({} as AuthContextValue);

const getAuthToken = (): Maybe<string> => {
  const { AUTH_COOKIE: token } = parseCookies()
  return token
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<AuthContextValue['token']>(() => getAuthToken());
  const signin = useCallback<AuthContextValue['signin']>((token) => {
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
      signin,
      signout,
    }),
    [userToken, signin, signout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
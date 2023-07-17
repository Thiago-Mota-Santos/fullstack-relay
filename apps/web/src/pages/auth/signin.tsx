import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React, { useContext } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-relay'

import router from 'next/router'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { AuthContext } from '../../context/AuthContext'
import {
  SigninMutation,
  SigninMutation$data,
} from '../../context/user/__generated__/SigninMutation.graphql'
import { SignInMutation } from '../../context/user/SigninMutation'
import { useToast } from '../../hooks/useToast'

const UserLoginFormSchema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type UserLoginFormData = z.infer<typeof UserLoginFormSchema>

export default function SignIn() {
  const { toast } = useToast()
  const { signIn } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(UserLoginFormSchema),
  })
  const [submit] = useMutation<SigninMutation>(SignInMutation)

  function handleLogin({ email, password }: UserLoginFormData) {
    submit({
      variables: {
        email,
        password,
      },
      onError(error) {
        if (error.name === 'TypeError') {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong',
            description: 'connection failed',
          })
        } else {
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong',
            description: 'Login failed',
          })
        }
      },
      onCompleted({ userLoginMutation }: SigninMutation$data) {
        const token = userLoginMutation?.token ?? ''
        const username = userLoginMutation?.me?.username

        toast({
          title: `Welcome ${username} 🚀`,
          description: 'Make an appointment now!',
        })

        signIn(token)
        router.push('/')
      },
    })
  }
  return (
    <main className="mx-auto h-full max-w-md p-6">
      <div className="mt-7 rounded-xl border border-gray-200 bg-white  dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Do not have an account yet?
              <a
                className="ml-[2px] font-medium text-blue-600 decoration-2 hover:underline"
                href="/auth/signup"
              >
                Sign up here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <div className="mb-4 border-t border-solid border-gray-200"></div>

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="email-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register('password')}
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="password-error"
                    />
                    {errors.password && (
                      <span className="text-sm text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-brandblue px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'graphic-token': token } = parseCookies(ctx)

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

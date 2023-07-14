import { useForm } from 'react-hook-form'
import { Button } from '../../../../../packages/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import React, { useContext } from 'react'
import { useMutation } from 'react-relay'
import { SignInMutation } from '@/context/SigninMutation'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import {
  SigninMutation,
  SigninMutation$data,
} from '@/context/__generated__/SigninMutation.graphql'
import { useToast } from '@/hooks/useToast'
import { ToastTable } from '@/components/ToastTable'
import { Toast } from '@radix-ui/react-toast'

const createUserFormSchema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .nonempty('Email is required'),
  password: z.string().min(6, 'password must be at least 6 characters'),
})

type CreateUserData = z.infer<typeof createUserFormSchema>

export default function SignUp() {
  const { toast } = useToast()
  const [request] = useMutation<SigninMutation>(SignInMutation)
  const { signIn } = useContext(AuthContext)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormSchema),
  })

  function handleRegister({ email, username, password }: CreateUserData) {
    request({
      variables: {
        email,
        password,
        username,
      },
      onError() {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'User already exists, try again.',
        })
      },
      onCompleted({ userRegisterMutation }: SigninMutation$data) {
        const token = userRegisterMutation?.token ?? ''

        signIn(token)
        router.push('/auth/signin')
      },
    })
  }

  return (
    <main className="mx-auto w-full max-w-md p-6">
      <div className="shadow-sm mt-7 rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <a
                className="ml-[2px] font-medium text-blue-600 decoration-2 hover:underline"
                href="/"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div className="mt-5">
            <div className="mb-4 border-t border-solid border-gray-200"></div>

            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm dark:text-white"
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
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 flex flex-col-reverse  text-sm dark:text-white"
                  >
                    username
                  </label>

                  <div className="relative">
                    <input
                      {...register('username')}
                      type="text"
                      id="username"
                      name="username"
                      className="block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:shadow-sm-0 focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="username-error"
                    />
                    {errors.username && (
                      <span className="text-sm text-red-600">
                        {errors.username.message}
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
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 flex flex-col-reverse  text-sm dark:text-white"
                  >
                    Password
                  </label>
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
                </div>

                <button className='className="py-3 dark:focus:ring-offset-gray-800" inline-flex h-12 items-center justify-center gap-2 rounded-md border border-transparent bg-brandblue px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

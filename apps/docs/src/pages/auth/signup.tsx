import { useForm } from 'react-hook-form'
import { Button } from '@fullstack/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import React, { useContext } from 'react'
import { useMutation } from 'react-relay'
import { SignInMutation } from '@/context/SigninMutation'
import { AuthContext } from '@/context/AuthContext'

const createUserFormSchema = z
  .object({
    email: z
      .string()
      .email('Invalid email format')
      .nonempty('Email is required'),
    password: z.string().min(6, 'password must be at least 6 characters'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match',
    path: ['confirm'],
  })

type CreateUserData = z.infer<typeof createUserFormSchema>

export default function SignUp() {
  const [request] = useMutation(SignInMutation)
  const { signIn } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: zodResolver(createUserFormSchema),
  })

  function handleRegister(data: CreateUserData) {
    console.log(data)
  }

  return (
    <main className="mx-auto w-full max-w-md p-6">
      <div className="mt-7 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
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
                      className="focus:shadow-sm-0 block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
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
                      className="focus:shadow-sm-0 block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
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

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 flex flex-col-reverse  text-sm dark:text-white"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      {...register('confirm')}
                      type="password"
                      id="confirm-password"
                      name="confirm-password"
                      className="focus:shadow-sm-0 block w-full rounded-md border border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                      required
                      aria-describedby="confirm-password-error"
                    />
                    {errors.confirm && (
                      <span className="text-sm text-red-600">
                        {errors.confirm.message}
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
                    id="confirm-password-error"
                  >
                    Password does not match the password
                  </p>
                </div>

                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

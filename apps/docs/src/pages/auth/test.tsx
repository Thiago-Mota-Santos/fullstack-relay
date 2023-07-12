import { useForm, useController } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from 'zod'

const user = {
  name: 'Dmitri',
  email: 'omg@blah.com',
  website: 'yoyo',
  country: 'ireland',
}

const validationSchema = z
  .object({
    name: string().min(1, { message: 'Name is required' }), // pass custom message
    email: string().email(),
    website: string().optional(),
    country: string(),
    password: string(),
    confirm: string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

export default function Comp2() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: user,
    resolver: zodResolver(validationSchema),
  })
  // console.log("register: ", register("name"));

  // useController({ name: "country", control });
  const { errors } = formState

  const onSubmit = (data) => {
    console.log('submitted data', data)
  }

  return (
    <div className="Comp2">
      <hr />
      <h1>test</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Name</p>
          <input type="text" {...register('name')} />
          <div style={{ color: 'red' }}>{errors?.name?.message}</div>
        </div>
        <div>
          <p>Email</p>
          <input type="text" {...register('email')} />
          <div style={{ color: 'red' }}>{errors?.email?.message}</div>
        </div>
        <div>
          <p>Website</p>
          <input type="text" {...register('website')} />
          <div style={{ color: 'red' }}>{errors?.website?.message}</div>
        </div>
        <div>
          <p>Country</p>
          <select {...register('country')}>
            <option value="ireland">Ireland</option>
            <option value="usa">usa</option>
          </select>
          <div style={{ color: 'red' }}>{errors?.country?.message}</div>
        </div>
        <div>
          <p>Password</p>
          <input type="password" {...register('password')} />

          <div style={{ color: 'red' }}>{errors?.password?.message}</div>
        </div>
        <div>
          <p>Confirm</p>
          <input type="password" {...register('confirm')} />
          <div style={{ color: 'red' }}>{errors?.confirm?.message}</div>
        </div>
        <hr />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

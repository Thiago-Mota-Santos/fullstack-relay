import { graphql } from 'graphql'
import { clearDatabaseAndRestartCounters } from '../../../../test/clearDatabase'
import { mongooseConnection } from '../../../../test/mongooseConnection'
import { mongooseDisconnect } from '../../../../test/mongooseDisconnect'
import { schema } from '../../../schema/schema'
import { createUser } from '../fixture/createUser'
import { UserLoginMutationResult } from '../../../../test/InterfaceTest'
import { getGraphqlResult } from '../../../../test/getGraphqlResult'

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it('should login a registered user', async () => {
  const { email } = await createUser({
    email: 'joao@email.com',
    password: 'joao12345',
  })

  const mutation = `
        mutation userLogin($email: String!, $password:String!){
            userLoginMutation(input: { email: $email, password: $password }){
                token
                me{
                    id
                }
            }
        }
    `

  const variableValues = {
    email,
    password: 'joao12345',
  }

  const result = await getGraphqlResult<UserLoginMutationResult>({
    schema,
    source: mutation,
    variableValues,
  })

  expect(result.errors).toBeUndefined()

  const { me, token } = result?.data?.userLoginMutation!
  expect(token).toBeDefined()
  expect(me?.id).toBeDefined()
})
it('should return a not found user', async () => {
  await createUser()

  const mutation = `
        mutation userLogin($email: String!, $password:String!){
        userLoginMutation(input: { email: $email, password: $password }){
            token
            me{
                id
            }
        }
    }
       `

  const variableValues = {
    email: 'test@email.com',
    password: '1234567',
  }

  const result = await getGraphqlResult<UserLoginMutationResult>({
    schema,
    source: mutation,
    variableValues,
  })

  expect(result.data?.userLoginMutation).toBeNull()

  expect(result.errors).toBeDefined()
  expect(result?.errors?.[0].message).toBe('User not found!')
})
it('should return a wrong password', async () => {
  const { email } = await createUser({ email: 'test@example.com' })

  const mutation = `
        mutation userLogin($email: String!, $password:String!){
        userLoginMutation(input: { email: $email, password: $password }){
            token
            me{
                id
            }
        }
    }
       `

  const variableValues = {
    email,
    password: '1234567',
  }

  const result = await getGraphqlResult<UserLoginMutationResult>({
    schema,
    source: mutation,
    variableValues,
  })

  expect(result.data?.userLoginMutation).toBeNull()

  expect(result.errors).toBeDefined()
  expect(result?.errors?.[0]?.message).toBe('Password is incorrect!')
})

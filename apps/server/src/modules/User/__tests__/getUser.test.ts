import { getUser } from '../../../../test/InterfaceTest'
import { clearDatabaseAndRestartCounters } from '../../../../test/clearDatabase'
import { getGraphqlResult } from '../../../../test/getGraphqlResult'
import { mongooseConnection } from '../../../../test/mongooseConnection'
import { mongooseDisconnect } from '../../../../test/mongooseDisconnect'
import { getContext } from '../../../getContext'
import { schema } from '../../../schema/schema'
import { createUser } from '../fixture/createUser'

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it('should get a User', async () => {
  const user = await createUser()

  const query = `
        query user{
            me{
                id
            }
        }
    `

  const result = await getGraphqlResult<getUser>({
    schema,
    source: query,
    contextValue: getContext({ user }),
  })

  expect(result.errors).toBeUndefined()

  // eslint-disable-next-line no-unsafe-optional-chaining, @typescript-eslint/no-non-null-assertion
  const { id } = result?.data?.me

  expect(id).toBeDefined()
})

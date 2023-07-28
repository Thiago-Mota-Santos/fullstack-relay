import { clearDatabaseAndRestartCounters } from '../../../../test/clearDatabase'
import { mongooseConnection } from '../../../../test/mongooseConnection'
import { mongooseDisconnect } from '../../../../test/mongooseDisconnect'
import { createUser } from '../../User/fixture/createUser'
import { getContext } from '../../../getContext'
import { AppointmentDelete } from '../../../../test/InterfaceTest'
import { schema } from '../../../schema/schema'
import { getGraphqlResult } from '../../../../test/getGraphqlResult'
import { createAppointment } from '../fixture/createAppointment'

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it('Should be able to delete an appointment', async () => {
  const user = await createUser()
  const { _id } = await createAppointment({
    clientName: 'Thiago',
    date: '23-01-2022',
    hour: '18:03',
    graphicLocation: 'satelite-iris-3',
    service: 'Banner',
  })

  const mutation = `
    mutation appointment($appointmentId: String!) {
      AppointmentDelete(input: { AppointmentId: $appointmentId }) {
        success
      }
    }
  `

  const variableValues = {
    appointmentId: _id.toString(),
  }

  const result = await getGraphqlResult<AppointmentDelete>({
    schema,
    source: mutation,
    variableValues,
    contextValue: getContext({ user }),
  })

  expect(result.errors).toBeUndefined()
  expect(result.data?.AppointmentDelete.success).toBe(
    'Appointment successfully deleted',
  )
})

import { clearDatabaseAndRestartCounters } from '../../../../test/clearDatabase'
import { mongooseConnection } from '../../../../test/mongooseConnection'
import { mongooseDisconnect } from '../../../../test/mongooseDisconnect'
import { createUser } from '../../User/fixture/createUser'
import { getContext } from '../../../getContext'
import { AppointmentUpdate } from '../../../../test/InterfaceTest'
import { schema } from '../../../schema/schema'
import { getGraphqlResult } from '../../../../test/getGraphqlResult'
import { createAppointment } from '../fixture/createAppointment'

beforeAll(mongooseConnection)
beforeEach(clearDatabaseAndRestartCounters)
afterAll(mongooseDisconnect)

it('Should be able to update an appointment', async () => {
  const user = await createUser()
  const { _id } = await createAppointment({
    clientName: 'Thiago',
    date: '23-01-2022',
    hour: '18:03',
    graphicLocation: 'satelite-iris-3',
    service: 'Banner',
  })

  const mutation = `
  mutation appointment ($appointmentId: String!, $clientName:String!, $date:String!, $hour:String!, $graphicLocation:String!, $service:String!){
    appointmentUpdateMutation(
      input: { appointmentId:$appointmentId, clientName:$clientName, date:$date, hour:$hour, graphicLocation:$graphicLocation, service:$service}
    ) {
      appointmentEdge {
        node {
          id
          clientName
          date
          hour
          graphicLocation
          service
        }
      }
      
    }
  }
  
  `

  const variableValues = {
    appointmentId: _id.toString(),
    clientName: 'Fernando',
    date: '2020-20-20',
    hour: '12:00',
    graphicLocation: 'Sergipe strike graphic',
    service: 'Internet',
  }

  const result = await getGraphqlResult<AppointmentUpdate>({
    schema,
    source: mutation,
    variableValues,
    contextValue: getContext({ user }),
  })

  expect(result.errors).toBeUndefined()

  const { node } = result.data?.appointmentUpdateMutation.appointmentEdge!
  expect(node.clientName).toBe(variableValues.clientName)
  expect(node.date).toBe(variableValues.date)
  expect(node.hour).toBe(variableValues.hour)
  expect(node.graphicLocation).toBe(variableValues.graphicLocation)
  expect(node.service).toBe(variableValues.service)
})

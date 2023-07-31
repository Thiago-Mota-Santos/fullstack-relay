import { ROOT_ID, RecordSourceSelectorProxy, graphql } from 'relay-runtime'
import { connectionUpdater } from '../../utils/connectionUpdater'

const AppointmentEdit = graphql`
  mutation AppointmentEditMutation(
    $appointmentId: String!
    $clientName: String!
    $date: String!
    $hour: String!
    $graphicLocation: String!
    $service: String!
  ) {
    appointmentUpdateMutation(
      input: {
        appointmentId: $appointmentId
        clientName: $clientName
        date: $date
        hour: $hour
        graphicLocation: $graphicLocation
        service: $service
      }
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
const updaterEdit = (store: RecordSourceSelectorProxy) => {
  const newEdge = store
    .getRootField('appointmentUpdateMutation')
    .getLinkedRecord('appointmentEdge')

  connectionUpdater({
    store,
    parentId: ROOT_ID,
    connectionName: 'AppointmentDetails_appointments',
    edge: newEdge,
  })
}

export { AppointmentEdit, updaterEdit }

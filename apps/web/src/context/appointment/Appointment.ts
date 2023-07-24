import { ROOT_ID, RecordSourceSelectorProxy, graphql } from 'relay-runtime'
import { connectionUpdater } from '../../utils/connectionUpdater'

const AppointmentQuery = graphql`
  query AppointmentQuery {
    appointments {
      edges {
        node {
          id
          clientName
          service
          date
          hour
          graphicLocation
        }
      }
    }
  }
`

const Appointment = graphql`
  mutation AppointmentMutation(
    $clientName: String!
    $date: String!
    $hour: String!
    $graphicLocation: String!
    $service: String!
  ) {
    appointmentRegisterMutation(
      input: {
        clientName: $clientName
        date: $date
        hour: $hour
        graphicLocation: $graphicLocation
        service: $service
      }
    ) {
      appointmentEdge {
        node {
          clientName
          service
          date
          hour
          graphicLocation
          id
        }
      }
    }
  }
`

const updater = (store: RecordSourceSelectorProxy) => {
  const newEdge = store
    .getRootField('appointmentRegisterMutation')
    .getLinkedRecord('appointmentEdge')

  connectionUpdater({
    store,
    parentId: ROOT_ID,
    connectionName: 'AppointmentList_appointments',
    edge: newEdge,
    before: true,
  })
}

export { Appointment, updater, AppointmentQuery }

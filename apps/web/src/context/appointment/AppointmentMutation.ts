import { graphql } from 'relay-runtime'

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
        }
      }
    }
  }
`
export { Appointment }

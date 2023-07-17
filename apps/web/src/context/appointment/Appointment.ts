import { graphql } from 'react-relay'

const Appointment = graphql`
  query AppointmentQuery {
    appointments {
      edges {
        node {
          date
          hour
          clientName
          service
          graphicLocation
          id
        }
      }
    }
  }
`

export { Appointment }

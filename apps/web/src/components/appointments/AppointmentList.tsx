import { AppointmentDetails } from './AppointmentDetails'
import { graphql, useFragment } from 'react-relay'
import { AppointmentList_appointment$key } from './__generated__/AppointmentList_appointment.graphql'
import { Table } from '../Table'
import { NoAppointment } from '../NoAppointment'

interface AppointmentListProps {
  query: AppointmentList_appointment$key
}

function AppointmentList({ query }: AppointmentListProps) {
  const appointmentList = useFragment<AppointmentList_appointment$key>(
    graphql`
      fragment AppointmentList_appointment on Query {
        appointments {
          edges {
            node {
              id
              ...AppointmentDetails_appointment
            }
          }
        }
      }
    `,
    query,
  )

  const { appointments } = appointmentList

  return (
    <div>
      {appointments.edges.length === 0 ? (
        <div className="mt-20 flex items-center justify-center">
          <NoAppointment />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Table />

          {appointments.edges.map(({ node }) => (
            <AppointmentDetails key={node.id} appointmentDetails={node} />
          ))}
        </div>
      )}
    </div>
  )
}

export { AppointmentList }

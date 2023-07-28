import { AppointmentDetails } from './AppointmentDetails'
import { graphql, usePaginationFragment } from 'react-relay'
import { AppointmentList_appointment$key } from './__generated__/AppointmentList_appointment.graphql'
import { Table } from '../Table'
import { NoAppointment } from '../NoAppointment'
import { AppointmentPaginationQuery } from './__generated__/AppointmentPaginationQuery.graphql'

interface AppointmentListProps {
  query: AppointmentList_appointment$key
}

function AppointmentList({ query }: AppointmentListProps) {
  const { data } = usePaginationFragment<
    AppointmentPaginationQuery,
    AppointmentList_appointment$key
  >(
    graphql`
      fragment AppointmentList_appointment on Query
      @argumentDefinitions(
        first: { type: Int, defaultValue: 1 }
        after: { type: String }
      )
      @refetchable(queryName: "AppointmentPaginationQuery") {
        appointments(first: $first, after: $after)
          @connection(key: "AppointmentList_appointments") {
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

  const { appointments } = data

  return (
    <div>
      {appointments.edges.length ? (
        <div className="flex flex-col items-center justify-center">
          <Table />
          {appointments.edges.map(({ node }) => (
            <AppointmentDetails key={node.id} appointmentDetails={node} />
          ))}
        </div>
      ) : (
        <div className="mt-20 flex items-center justify-center">
          <NoAppointment />
        </div>
      )}
    </div>
  )
}

export { AppointmentList }

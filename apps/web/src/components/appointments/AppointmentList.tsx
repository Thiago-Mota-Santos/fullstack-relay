import { AppointmentDetails } from './AppointmentDetails'
import { graphql, usePaginationFragment } from 'react-relay'
import { Table } from '../Table'
import { NoAppointment } from '../NoAppointment'
import { AppointmentList_appointment$key } from '../../__generated__/AppointmentList_appointment.graphql'
import { AppointmentPaginationQuery } from '../../__generated__/AppointmentPaginationQuery.graphql'
import { useMemo } from 'react'

interface AppointmentListProps {
  query: AppointmentList_appointment$key
  search: string
}

function AppointmentList({ query, search }: AppointmentListProps) {
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
              graphicLocation
              ...AppointmentDetails_appointment
            }
          }
        }
      }
    `,
    query,
  )

  const { appointments } = data
  const filteredData = useMemo(() => {
    const searchToLowerCase = search.toLocaleLowerCase()

    return appointments.edges.filter(({ node }) =>
      node.graphicLocation.toLowerCase().includes(searchToLowerCase),
    )
  }, [search, appointments.edges])

  return (
    <div>
      {appointments.edges.length ? (
        <div className="flex flex-col items-center justify-center">
          <Table />
          {filteredData.map(({ node }) => (
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

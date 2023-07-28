import { NotePencil } from '@phosphor-icons/react'
import { DeleteModal } from '../DeleteModal'
import { graphql } from 'relay-runtime'
import { AppointmentDetails_appointment$key } from './__generated__/AppointmentDetails_appointment.graphql'
import { useFragment } from 'react-relay'

interface AppointmentProps {
  appointmentDetails: AppointmentDetails_appointment$key
}

function AppointmentDetails({ appointmentDetails }: AppointmentProps) {
  const appointment = useFragment(
    graphql`
      fragment AppointmentDetails_appointment on Appointment {
        date
        hour
        clientName
        service
        graphicLocation
        id
      }
    `,
    appointmentDetails,
  )

  return (
    <table className="h-20 w-2/3 rounded-lg border-b border-gray-600 bg-gray-900 py-4">
      <thead>
        <tr>
          <td className="px-6 py-4 text-left text-sm font-medium text-gray-400 dark:text-gray-200">
            <span>
              <p className="text-sm dark:text-gray-200">{appointment.date}</p>
              <p className="dark:text-gray-400">{appointment.hour}</p>
            </span>
          </td>

          <td
            scope="col"
            className="py-4 pr-2 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            {appointment.graphicLocation}
          </td>
          <td
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            {appointment.clientName}
          </td>
          <td
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            {appointment.service}
          </td>
          <td
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            <span>
              <NotePencil color="#c4baba" size={28} />
            </span>
          </td>
          <td
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            <span>
              <DeleteModal appointmentDelete={appointment.id} />
            </span>
          </td>
        </tr>
      </thead>
    </table>
  )
}

export { AppointmentDetails }

import { NotePencil, Trash } from '@phosphor-icons/react'

interface TableContentProps {
  day: string
  hour: string
  graphic: string
  client: string
  service: 'Internet' | 'Xerox' | 'Other' | 'Banner'
}

function TableDetails({
  day,
  hour,
  client,
  service,
  graphic,
}: TableContentProps) {
  return (
    <table className="h-20 w-2/3 rounded-lg border-b border-gray-600 bg-gray-900 py-4">
      <thead>
        <tr>
          <td className="px-6 py-4 text-left text-sm font-medium text-gray-400 dark:text-gray-200">
            <span>
              <p className="text-sm dark:text-gray-200">{day}</p>
              <p className="dark:text-gray-400">{hour}</p>
            </span>
          </td>

          <td
            scope="col"
            className="py-4 pr-2 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            {graphic}
          </td>
          <td
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            {client}
          </td>
          <td
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500  dark:text-gray-400"
          >
            {service}
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
              <Trash className="mr-2" size={28} color="#ff0000" />
            </span>
          </td>
        </tr>
      </thead>
    </table>
  )
}

export { TableDetails }

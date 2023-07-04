import { NotePencil, Trash } from '@phosphor-icons/react'

interface TableContentProps {
  day: string
  hour: string
  graphic: string
  client: string
  service: 'Internet' | 'Xerox' | 'Other' | 'Banner'
}

// function TableContent() {
//   return (
//     <table className="h-20 w-2/3 divide-y divide-gray-300 rounded-lg bg-gray-900 py-4">
//       <tr>
//         <td>
//           <div className="flex flex-1 items-center justify-between">
//             <span className="ml-4 flex flex-col items-center justify-center">
//               <p className="text-white">13-03-2021</p>
//               <p className="mr-12 text-gray-600 dark:text-gray-400">9:05</p>
//             </span>
//             <p className="text-white">Grande</p>
//             <p className="text-white">Thiago</p>
//             <p className="text-white">Banner</p>
//             <NotePencil color="#c4baba" size={28} />
//             <Trash className="mr-8" size={28} color="#ff0000" />
//           </div>
//         </td>
//       </tr>
//     </table>
//   )
// }

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

function Table() {
  return (
    <table className="mt-16 h-16 w-2/3 rounded-lg border-b border-gray-600 bg-gray-800 py-4">
      <thead>
        <tr>
          <th
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500 rtl:text-right   dark:text-gray-400"
          >
            Day / Hour
          </th>
          <th
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500 rtl:text-right  dark:text-gray-400"
          >
            Graphic
          </th>
          <th
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500 rtl:text-right  dark:text-gray-400"
          >
            Client
          </th>
          <th
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500 rtl:text-right  dark:text-gray-400"
          >
            Service
          </th>
          <th
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500 rtl:text-right  dark:text-gray-400"
          >
            Edit
          </th>
          <th
            scope="col"
            className="px-6 py-4 text-left text-sm font-medium text-gray-500 rtl:text-right  dark:text-gray-400"
          >
            Delete
          </th>
        </tr>
      </thead>
    </table>
  )
}

export { Table }

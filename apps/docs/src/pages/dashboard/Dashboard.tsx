import { Table } from '../../components/Table'
import { TableDetails } from '../../components/TableDetails'
import DialogButton from '../../components/DialogButton'
import React from 'react'

export default function Dashboard() {
  const bool = true

  return (
    <main className="h-full">
      <div className="ml-40 mr-40 mt-10 flex items-center justify-between ">
        {/* <button className="flex h-9 w-[136px] items-center justify-center gap-0.5 rounded-lg bg-blue-300 py-3 transition-all hover:cursor-pointer hover:bg-blue-400">
          <Plus size={16} />
          <span className="text-sm font-semibold">Appointment</span>
        </button> */}
        <DialogButton />
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search by graphic"
              required
            />
          </div>
        </form>
      </div>

      {bool ? (
        <div className="flex flex-col items-center justify-center">
          <Table />
          <TableDetails
            day={'20-02-22'}
            hour={'10:03'}
            graphic={'Campo grande'}
            client={'Emersu'}
            service={'Internet'}
          />
        </div>
      ) : (
        <div className="items center flex items-center justify-center gap-2">
          <p className="text-sm text-white">No entry, create one:</p>
          <button className="flex h-9 w-[136px] items-center justify-center gap-0.5 rounded-lg bg-blue-300 py-3 transition-all hover:cursor-pointer hover:bg-blue-400">
            <DialogButton />
          </button>
        </div>
      )}
    </main>
  )
}

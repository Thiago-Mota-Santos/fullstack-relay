import DialogButton from '../components/DialogButton'
import React, { ChangeEvent, useState } from 'react'
import { PreloadedQuery, graphql, usePreloadedQuery } from 'react-relay'
import { GetServerSideProps } from 'next'
import { getPreloadedQuery } from '../relay/network'
import pageQuery, {
  pagesQuery as pageQueryType,
} from '../__generated__/pagesQuery.graphql'
import Logout from '../components/Logout'
import { AppointmentList } from '../components/appointments/AppointmentList'
import { getCookie } from '@/utils/getToken'
import { parseCookies } from 'nookies'

interface HomeProps {
  queryRefs: {
    pageQuery: PreloadedQuery<pageQueryType>
  }
}

const Appointment = graphql`
  query pagesQuery @preloadable {
    ...AppointmentList_appointment
  }
`

export default function Home({ queryRefs }: HomeProps) {
  const query = usePreloadedQuery(Appointment, queryRefs.pageQuery)
  const [search, setSearch] = useState('')
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <main className="h-full">
      <div className="m-4">
        <Logout />
      </div>
      <div className="ml-40 mr-40 mt-10 flex items-center justify-between">
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
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search by graphic"
              onChange={handleSearchChange}
              required
            />
          </div>
        </form>
      </div>

      <AppointmentList query={query} search={search} />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(ctx.req.headers)
 
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/signin',
      },

      props: {},
    }
  }

  return {
    props: {
      preloadedQueries: {
        pageQuery: await getPreloadedQuery(pageQuery, {}, token),
      },
    },
  }
}

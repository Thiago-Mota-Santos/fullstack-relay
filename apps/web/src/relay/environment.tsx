import type { FetchFunction } from 'relay-runtime'
import { Environment, Network, RecordSource, Store } from 'relay-runtime'

/**
 *
 * Define a function that fetches the results of an operation (query/mutation)
 * and returns its results as a Promise.
 */

const GRAPHQL_ENPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
const fetchQuery: FetchFunction = async (
  operation,
  variables,
  // cacheConfig,
  // uploadables
) => {
  const response = await fetch(GRAPHQL_ENPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })

  return await response.json()
}

/**
 * Create a network layer from the fetch function
 */
const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())

export const environment = new Environment({
  network,
  store,
})
